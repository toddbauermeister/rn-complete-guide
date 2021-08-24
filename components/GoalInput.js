import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const GoalInput = props => {
    return (
        <View style={styles.inputContainer}>
            {/* Course goal input */}
            <TextInput
                placeholder='Course goal'
                style={styles.input}
                onChangeText={props.updateGoal}
                value={props.goalEntered} // nb this binds the value of the input to reflect the state 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    inputContainer: {
        justifyContent: 'center',
        flex: 3,
        paddingHorizontal: 10,
    },
})

export default GoalInput;