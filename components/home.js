import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch, ViewComponent } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// LocaleConfig.defaultLocale = 'br';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
      
      <View style={styles.container}>
        {isLoading ? (<Text>Vamo bora</Text>):(
        <View>

        <Text>
        Principal
        </Text>
        </View>)}
      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendar:{
    borderWidth: 1,
    borderColor: 'gray',
    height: 'auto',
    margin: 10,
    // flex:1
  }
});
