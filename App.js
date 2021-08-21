import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  inputContainer: {
    width: '80%', 
    height: '100%', 
    justifyContent: 'space-between',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonAddContainer: {
    width: '20%', 
    height: '100%',
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
        <View style={styles.inputGroup}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Course goal"
              style={styles.input}
              onChangeText={updateGoal}
            />
          </View>
          <View style={styles.buttonAddContainer}>
            <Button
              title="ADD"
              onPress={addGoalToList}
              style={styles.buttonAdd}
            />
          </View>
        </View>
        <View>
          {goalList.map(goal => <Text>{goal}</Text>)}
        </View>
      </View>
    </>
  );
}