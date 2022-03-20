import React, {useState} from 'react';
import {SafeAreaView, Button, StyleSheet} from 'react-native';
import Box from './components/Box';
import Counter from './components/Counter';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <SafeAreaView style={styles.full}>
      <Counter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});

export default App;
