import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = ({ onNavigate }) => {
    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.button} onPress={() => onNavigate('Home')}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onNavigate('Wallet')}>
                <Text style={styles.buttonText}>Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onNavigate('Settings')}>
                <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#f8f8f8',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    button: {
        padding: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#007bff',
    },
});

export default Footer;
