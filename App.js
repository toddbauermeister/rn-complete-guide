import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
    borderColor: 'red',
    borderWidth: 1,
  },
  inputGroup: {
    flexDirection: 'row',
    height: '10%',
  },
  inputContainer: {
    justifyContent: 'center',
    flex: 3,
    paddingHorizontal: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  buttonAddContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  buttonAdd: {
    height: '100%',
  },
  goalList: {
    padding: 10
  },
  buttonClearContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  buttonClear: {
    color: 'red',
  },
});

export default function App() {
  const [goalEntered, setGoalEntered] = useState('');
  const [goalList, setGoalList] = useState([]);

  // react native will automatically pass value
  // update the local goal state
  const updateGoal = (value) => {
    setGoalEntered(value);
  };

  const clearGoals = () => {
    setGoalList([]);
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
              placeholder='Course goal'
              style={styles.input}
              onChangeText={updateGoal}
            />
          </View>
          <View style={styles.buttonAddContainer}>
            <Button
              title='ADD'
              onPress={addGoalToList}
              style={styles.buttonAdd}
            />
          </View>
        </View>
        {
          goalList.length > 0 &&
          <View style={styles.buttonClearContainer}>
            <Button
              title='CLEAR'
              color='red'
              onPress={clearGoals}
            />
          </View>
        }
        <View style={styles.goalList}>
          {goalList.map((goal, index) => <Text key={index}>{goal}</Text>)}
        </View>
      </View>
    </>
  );
}