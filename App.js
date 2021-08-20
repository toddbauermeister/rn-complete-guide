import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';

export default function App() {
  return (
    <>
      {/* Input and button */}
      <View style={{ padding: 30 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TextInput placeholder="Course goal" style={{ borderColor: 'black', borderWidth: 1, padding: 10, width: '80%' }} />
          <Button title="ADD" />
        </View>
        <View>
        </View>
      </View>

      {/* Playing with flexbox */}
      <View style={{ padding: 50 }}>
      <View
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>
    </View>
    </>
  );
}
