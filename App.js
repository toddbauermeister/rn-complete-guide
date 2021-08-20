import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';

export default function App() {
  return (
    <>
      {/* Header */}
      <View style={{ height: '10%', marginTop: '10%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-start', borderColor: 'black', borderWidth: 1 }}>
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
      </View>

      {/* Body */}
      <View style={{height: '90%', borderColor: 'black', borderWidth: 1 }}>
          
      </View>
    </>
  );
}
