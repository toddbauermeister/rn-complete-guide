import React from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = props => {
    const { 
        updateGoal, 
        goalEntered, 
        addGoalToList, 
        clearGoalEntered,
        showModal,
        toggleModal,
    } = props

    return (
        <Modal visible={showModal} animationType="fade">
            <View style={styles.inputContainer}>
                {/* Course goal input */}
                <TextInput
                    placeholder='Course goal'
                    style={styles.input}
                    onChangeText={updateGoal}
                    value={goalEntered} // nb this binds the value of the input to reflect the state 
                />
            </View>
            <View style={styles.buttonAddContainer}>
                {/* ADD button */}
                <Button
                    title='ADD'
                    onPress={() => {
                        addGoalToList();
                        clearGoalEntered();
                        toggleModal()
                    }}
                    style={styles.buttonAdd}
                />
                <Button
                    title='CANCEL'
                    onPress={toggleModal}
                    style={styles.buttonCancel}
                    color='red'
                />
            </View>
        </Modal>
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
        flex: 1,
        paddingHorizontal: 10,
    },
    buttonAddContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    buttonAdd: {
        height: '100%',
    },
    buttonAdd: {
        height: '100%',
    },
    buttonCancel: {
        height: '100%',
        marginVertical: 10,
    }
})

export default GoalInput;