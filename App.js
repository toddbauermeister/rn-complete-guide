import React from 'react';
import { Button, TextInput, View, Text, StyleSheet } from 'react-native';

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
      {/* Header */}
      {/* <View style={{ height: '10%', marginTop: '10%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-start', borderColor: 'black', borderWidth: 1 }}>
        <View
          style={{
            backgroundColor: 'red',
            width: '30%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            width: '30%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: 'green',
            width: '30%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>3</Text>
        </View>
      </View> */}

      {/* Body */}
      {/* <View style={{height: '90%', borderColor: 'black', borderWidth: 1 }}>
          
      </View> */}
    </>
  );
}


