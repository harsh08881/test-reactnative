import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import * as Keychain from 'react-native-keychain';

const PinScreen = ({ navigation }) => {
  const [pin, setPin] = useState('');
  const [isSetup, setIsSetup] = useState(false);

  const handleSetPin = async () => {
    await Keychain.setGenericPassword('pin', pin);
    Alert.alert('Success', 'PIN has been set successfully!');
    setIsSetup(true);
  };

  const handleVerifyPin = async () => {
    const credentials = await Keychain.getGenericPassword();
    if (credentials && credentials.password === pin) {
      Alert.alert('Success', 'Access Granted!');
      navigation.navigate('Home'); // Example navigation
    } else {
      Alert.alert('Error', 'Incorrect PIN!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSetup ? 'Enter PIN' : 'Set Your PIN'}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        secureTextEntry
        maxLength={4}
        value={pin}
        onChangeText={setPin}
      />
      <Button
        title={isSetup ? 'Unlock' : 'Set PIN'}
        onPress={isSetup ? handleVerifyPin : handleSetPin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: {
    width: 200,
    borderBottomWidth: 2,
    borderColor: '#007AFF',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default PinScreen;
