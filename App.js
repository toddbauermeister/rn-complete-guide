import React from 'react';
import { Button, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30}}> 
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput placeholder="Course goal" style={{borderColor: 'black', borderWidth: 1, padding: 10, width: '80%'}}/>
        <Button title="ADD"/>
      </View>
      <View>
      </View>
    </View>
  );
}
