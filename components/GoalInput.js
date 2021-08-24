import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = props => {
    return (
        <>
            <View style={styles.inputContainer}>
                {/* Course goal input */}
                <TextInput
                    placeholder='Course goal'
                    style={styles.input}
                    onChangeText={props.updateGoal}
                    value={props.goalEntered} // nb this binds the value of the input to reflect the state 
                />
            </View>
            <View style={styles.buttonAddContainer}>
                {/* ADD button */}
                <Button
                    title='ADD'
                    onPress={() => {
                        props.addGoalToList();
                        props.clearGoalEntered();
                    }}
                    style={styles.buttonAdd}
                />
            </View>
        </>
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
    buttonAddContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    buttonAdd: {
        height: '100%',
    },
})

export default GoalInput;