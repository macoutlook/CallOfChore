import { Button, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {getWeek} from '../TimeManager';
import * as dbs from "../../app/DbManager";
import * as Chore from "../../app/model/Chore";

let chores: Chore.Chore[] = Chore.Chore.getDefinedChores();

let dbManager = new dbs.DbManager();
let totalPoints: number = dbManager.getPoints();

export default function Index() {
  const [points, setPoints] = useState(dbManager.getPoints());
  const [selectedChore, setSelectedChore] = useState(chores[0].name);
  const [myText, setMyText] = useState("My Original Text");
  return (
    <View
      style={{
        backgroundColor: "vanilla",
        flexDirection: "column",
        flex: 4,
        padding: 20,
        justifyContent: "space-evenly",
        paddingBottom: 20,
        paddingTop: 40,
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 18, color: "#333333" }}>
        Add your next chore execution!
      </Text>

      <View
        style={{
          flex: 2,
          borderWidth: 1,
          borderColor: "dark-blue",
          borderRadius: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Picker
          style={{ width: 350 }}
          itemStyle={{ color: "black" }}
          selectedValue={selectedChore}
          onValueChange={(itemValue, itemIndex) => setSelectedChore(itemValue)}
        >
          {chores.map((chore) => (
            <Picker.Item
              key={chore.name}
              label={chore.name}
              value={chore.name}
            />
          ))}
        </Picker>
      </View>
      <View style={{ flex: 2, position: "relative" }}>
        <Button
          title="Execute"
          onPress={() => {
            execute(selectedChore, setPoints);
          }}
          color="#76b6c4"
        ></Button>
      </View>

      <View style={{ flex: 1, position: "relative" }}>
        <Text style={{ textAlign: "center", fontSize: 40, color: "#76b6c4" }}>
          {points}
        </Text>
      </View>
    </View>
  );
}
async function execute(
  this: any,
  choreName: string,
  setPoints: React.Dispatch<React.SetStateAction<number>>
) {
  console.log("Executing chore:", choreName);
  var found = chores.find((chore: Chore.Chore) => chore.name === choreName);

  var week = getWeek();

  console.log(week);

  if (found) {
    var executedChore: Chore.ExecutedChore = {
      name: choreName,
      points: found.points,
      date: new Date()
    };
    console.log("Points:", found.points);
    console.log("TotalPoints:", totalPoints);
    totalPoints += found.points; // Add the points to the total points
    setPoints(totalPoints); // Update the points state
    await dbManager.saveChore(executedChore, week); // Save the chore to the database

    // const allRows = await db.getAllAsync("SELECT * FROM Chores");
    // for (const row of allRows) {
    //   console.log(row);
    // }
  } else {
    console.error("Chore not found:", choreName);
  }
}