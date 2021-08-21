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
  const [goal, setGoal] = useState('');

  // react native will automatically pass value
  const textChanged = (value) => {
    setGoal(value);
  }

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Course goal"
            style={styles.input}
            onChangeText={ textChanged } />
          <Button title="ADD" />
        </View>
        <View>
          <Text>{goal}</Text>
        </View>
      </View>
    </>
  );
}