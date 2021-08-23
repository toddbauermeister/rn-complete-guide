import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const GoalInput = props => {
    return (
        <TextInput
            placeholder='Course goal'
            style={styles.input}
            onChangeText={props.updateGoal}
            value={goalEntered} // nb this binds the value of the input to reflect the state 
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
})

export default GoalInput;