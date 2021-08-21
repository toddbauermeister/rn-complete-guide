import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  }
});

export default function App() {
  const [goalEntered, setGoalEntered] = useState('');
  const [goalList, setGoalList] = useState([]);

  // react native will automatically pass value
  // update the local goal state
  const updateGoal = (value) => {
    setGoalEntered(value);
  };

  const addGoalToList = () => {
    // goalList is considered prevState by react here
    // NB we cannot guarantee that ...goalList will be the correct value due to timing issues
    // setGoalList([...goalList, goalEntered]);

    // This is a better way of doing it :)
    // 'this is guaranteed to work, react will pass guaranteed previous state'
    setGoalList(currentGoals => [...currentGoals, goalEntered]);
  };

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Course goal"
            style={styles.input}
            onChangeText={updateGoal}
          />
          <Button title="ADD" onPress={addGoalToList}/>
        </View>
        <View>
         {goalList.map(goal => <Text>{goal}</Text>)}
        </View>
      </View>
    </>
  );
}