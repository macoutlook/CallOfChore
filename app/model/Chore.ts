export class Chore {
  name: string = "";
  points: number = 0;
  date?: Date;

  constructor(name: string, points: number) {
    this.name = name;
    this.points = points;
    this.date = new Date();
  }

  static getDefinedChores(): Chore[] {
    let chores: Chore[] = [
      { name: "Full clean the bathroom upstairs", points: 20 },
      { name: "Partial clean the bathroom upstairs", points: 10 },
      { name: "Full clean the bathroom downstairs", points: 10 },
      { name: "Partial clean the bathroom downstairs", points: 5 },
      { name: "Laundry", points: 5 },
      { name: "Hang the laundry out", points: 10 },
      { name: "Collect laundry", points: 10 },
      { name: "Set dishwasher", points: 5 },
      { name: "Empty dishwasher", points: 5 },
      { name: "Feed dog", points: 5 },
      { name: "Walk with dog", points: 5 },
      { name: "Throw garbage away", points: 5 },
      { name: "Take dog to the vet", points: 15 },
      { name: "Full hoovering", points: 15 },
      { name: "Partial hoovering", points: 5 },
      { name: "Clean floor", points: 15 },
      { name: "Cook meal", points: 15 },
      { name: "Clean up kitchen", points: 10 },
      { name: "Feed baby & clean up", points: 10 },
      { name: "Lull baby to sleep", points: 10 },
      { name: "Bathe baby", points: 10 },
      { name: "Morning/evening baby hygiene routine", points: 10 },
      { name: "Do the shopping", points: 15 },
      { name: "Do the small shopping", points: 5 },
      { name: "Wipe the dust", points: 10 },
      { name: "Change the sheets ", points: 10 },
      { name: "Clean windows", points: 25 },
      { name: "Clean hall mirror", points: 15 },
      { name: "Clean shower window", points: 5 },
      { name: "Wash car", points: 15 },
      { name: "Home repair", points: 25 },
    ];

    return chores;
}
}

export class ExecutedChore {
  name: string = "";
  points: number = 0;
  date: Date;
  dateString?: string;
}