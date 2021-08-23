import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text, FlatList } from 'react-native';

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
  goalListItem: {
    paddingTop: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 5
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

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.inputGroup}>
          <View style={styles.inputContainer}>
            {/* Course goal input */}
            <TextInput
              placeholder='Course goal'
              style={styles.input}
              onChangeText={updateGoal}
              value={goalEntered} // nb this binds the value of the input to reflect the state 
            />
          </View>
          <View style={styles.buttonAddContainer}>
            {/* ADD button */}
            <Button
              title='ADD'
              onPress={() => {
                addGoalToList();
                clearGoalEntered();
              }}
              style={styles.buttonAdd}
            />
          </View>
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
              <View style={styles.goalListItem}>
                <Text>{itemData.item.value}</Text>
              </View>
            )
          }
        />
      </View>
    </>
  );
}