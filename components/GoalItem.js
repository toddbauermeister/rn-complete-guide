import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GoalItem = props => {
    const { goal, goalId, removeGoalFromList } = props
    return (
        <TouchableOpacity
            onPress={removeGoalFromList.bind(this, goalId)}
        >
            <View style={styles.goalItem}>
                <Text>{goal}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        paddingTop: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginTop: 10,
        borderRadius: 5
    },
})

export default GoalItem;