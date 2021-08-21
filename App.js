import React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

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
  return (
    <>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Course goal" style={styles.input} />
          <Button title="ADD" />
        </View>
        <View>
        </View>
      </View>
    </>
  );
}


