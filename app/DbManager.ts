import * as SQLite from "expo-sqlite";
import { getWeek } from "../app/TimeManager";
import * as Chore from "../app/model/Chore";

export class DbManager {
  private db: SQLite.SQLiteDatabase;

  initializeDatabase(): void {
    console.log("Db initialization");
    this.db = SQLite.openDatabaseSync("CallOfChore");
    console.log("log " + this.db);
  }

  async createTable(): Promise<void> {
    await this.db.execAsync(`
          PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS Chores (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, points INTEGER, date DATETIME DEFAULT CURRENT_TIMESTAMP, week INTEGER);
          `);
  }

  async saveChore(chore: Chore.ExecutedChore, week: number): Promise<void> {
    if (this.db === undefined) this.initializeDatabase();
    console.log("Points:", chore.points);
    await this.db.runAsync(
      `
          INSERT INTO Chores (name, points, week) VALUES ($name, $points, $week);
          `,
      { $name: chore.name, $points: chore.points, $week: week }
    );
  }

  getPoints(week?: number): number {
    if (!week) week = getWeek();
    console.log("Getting points for week:", this.db);
    if (this.db === undefined) this.initializeDatabase();
    var chores = this.getChores(week);
    var points = chores.reduce((total, chore) => total + chore.points, 0);
    console.log("Got points from db:", points);

    return points;
  }

  getChores(week?: number): Chore.ExecutedChore[] {
    if (!week) week = getWeek();
    console.log("Getting chores for week:", this.db);
    if (this.db === undefined) this.initializeDatabase();
    var chores = this.db.getAllSync<Chore.ExecutedChore>(
      `SELECT name, points, date as dateString FROM Chores WHERE week = $week`,
      { $week: week }
    );

    chores.forEach((chore) => {
      chore.date = new Date(chore.dateString);
    });

    return chores.sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}
