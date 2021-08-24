import React, { useState } from 'react';
import { Button, View, StyleSheet, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

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
  // update the local goal state (in the input)
  const updateGoal = (value) => {
    setGoalEntered(value);
  };

  const clearGoalEntered = () => {
    setGoalEntered('')
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
    setGoalList(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalEntered }
    ]);
  };

  const removeGoalFromList = goalId => {
    
  }

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.inputGroup}>
          <GoalInput
            updateGoal={updateGoal}
            goalEntered={goalEntered}
            addGoalToList={addGoalToList}
            clearGoalEntered={clearGoalEntered}
          />
        </View>
        {
          goalList.length > 0 &&
          <View style={styles.buttonClearContainer}>
            {/* CLEAR button */}
            <Button
              title='CLEAR'
              color='red'
              onPress={clearGoals}
            />
          </View>
        }

        {/* Use flatlist when you have a very long list or you don't know how long your list is going to be */}
        <FlatList
          keyExtractor={(item, index) => item.key}
          data={goalList}
          renderItem={
            itemData => (
              <GoalItem
                goal={itemData.item.value}
                onDelete={() => console.log('Delete!')}
              />
            )
          }
        />
      </View>
    </>
  );
}