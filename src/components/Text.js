import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TextComponent = ({text}) => {
    return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: 'black'
    }
});

export default TextComponent;
