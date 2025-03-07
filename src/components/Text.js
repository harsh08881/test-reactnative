import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TextScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is a simple text screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    text: {
        fontSize: 18,
        color: 'black'
    }
});

export default TextScreen;
