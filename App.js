import React from 'react';
import { Button, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30}}> 
      <View style={{flexDirection: 'row'}}>
        <TextInput placeholder="Course goal" style={{borderColor: 'black', borderWidth: 1, padding: 10}}/>
        <Button title="ADD"/>
      </View>
      <View>
      </View>
    </View>
  );
}
