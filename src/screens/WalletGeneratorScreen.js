import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ethers } from 'ethers';

const WalletGeneratorScreen = () => {
  const [wallet, setWallet] = useState(null);

  const generateWallet = () => {
    const newWallet = ethers.Wallet.createRandom();
    setWallet({
      address: newWallet.address,
      privateKey: newWallet.privateKey,
      mnemonic: newWallet.mnemonic.phrase,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Wallet Generator</Text>
      <Button title="Generate Wallet" onPress={generateWallet} />
      {wallet && (
        <View style={styles.walletContainer}>
          <Text>Address: {wallet.address}</Text>
          <Text>Private Key: {wallet.privateKey}</Text>
          <Text>Mnemonic: {wallet.mnemonic}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  walletContainer: { marginTop: 20, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 },
});

export default WalletGeneratorScreen;
