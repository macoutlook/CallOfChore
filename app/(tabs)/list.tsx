import * as dbs from "../../app/DbManager";
import * as Chore from "../../app/model/Chore";
import {FlatList, StyleSheet, Text, View} from 'react-native';

let dbManager = new dbs.DbManager();
let chores: Chore.ExecutedChore[] = dbManager.getChores();
const renderItem = ({item, index}) => (
    <View>
        <Text style={styles.primaryText}>
        {item.name + '\r' + item.dateString + '\r'}
        </Text>
   </View>);

export default function List() {
  return (
    <View style={styles.container}>
      <FlatList
        data={chores}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
      flex : 1,
      alignItems : 'center',
    },
    
    row: { 
     flexDirection: 'row', 
     alignItems: 'center', 
     padding: 12 
    },
    
    picture: { 
      width: 50, 
      height: 50, 
      borderRadius: 25, 
      marginRight: 18 
    },
    
      primaryText: {
      fontWeight: 'bold',
      fontSize: 14,
      color: '#76b6c4',
      marginBottom: 4,
    },
    
    secondaryText: {
      color: 'darkgrey' 
    },
    
    description: {       
      fontSize: 20,
      color : '#fff',
      textAlign: 'center',
      marginTop: 8,
      marginBottom : 8,
      top : 4
      },
    
     });