import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WalletGeneratorScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Wallet Generator</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  walletContainer: { marginTop: 20, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 },
});

export default WalletGeneratorScreen;
