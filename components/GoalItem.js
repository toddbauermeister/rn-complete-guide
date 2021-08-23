import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoalItem = props => {
    const { goal } = props
    return (
        <View style={styles.goalItem}>
            <Text>{goal}</Text>
        </View>
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