import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextOnlyComponent from '../components/Text';

const TextScreen = () => {
  return (
    <View style={styles.container}>
      <TextOnlyComponent text="This is a text screen!" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default TextScreen;
