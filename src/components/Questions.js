import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Questions = ({ question, options, onSelect }) => {

    return (
        <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{question}</Text>
            <View style={styles.optionsContainer}>
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.optionButton}
                        onPress={() => {
                            onSelect(option);
                        }}
                    >
                        <Text style={styles.optionText}>{option.option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    questionContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 75
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 25,
        fontFamily: 'Roboto',
        textAlign: 'center'
    },
    optionsContainer: {
        flexDirection: 'column',
        width: '100%',
    },
    optionButton: {
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
        backgroundColor: '#eee',
        borderWidth: 2,
        borderColor: '#ccc',
    },
    optionText: {
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 10
    }
});

export default Questions;