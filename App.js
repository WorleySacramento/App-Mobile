import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {BottomNav} from './components/tab';

const App = () => {
  return (
    <SafeAreaProvider>

    <NavigationContainer>
      <BottomNav navigation={{state: {index: 0}, navigate: ()=>{}}}/>
     
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
