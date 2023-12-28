import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch, ViewComponent } from 'react-native';
// import {Calendar,CalendarList, Agenda,WeekCalendar, LocaleConfig, ExpandableCalendar } from 'react-native-calendars';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// LocaleConfig.defaultLocale = 'br';

export default function Calendario() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selected, setSelected] = useState('');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
      
      <View>
        <Text>Calendario</Text>
      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
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