import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Switch, ViewComponent, TouchableOpacity, SafeAreaView, Image, ScrollView, FlatList, } from 'react-native';
// import {Calendar,CalendarList, Agenda,WeekCalendar, LocaleConfig, ExpandableCalendar } from 'react-native-calendars';
import getWeatherData from '../controller/controller';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons, } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

import { API_KEY } from '../controller/api';
import { SearchBar } from '@rneui/themed';
import { TextInput } from 'react-native-paper';
import CloudSvg from '../assets/icons/cloudy-sun.svg'
import Svg from 'react-native-svg';
import forecast from '../controller/api';
import axios from 'axios'
import Card from './Card';
import { Cloudicon } from '../assets/icons/cloud-icon';

// LocaleConfig.defaultLocale = 'br';

const weekdays = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];


export default function Clima(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [weatherData, setWeatherData] = useState(null);
  //   const [locations, setLocations] = useState([1,2,3])

  //   const [location, setLocation] = useState(false)



  // ...
  const [showSearch, setShowSearch] = useState(false);
  const [city, setCity] = useState('');
  // const cities = [city];
  const cities = [

    {
      name: 'Fortaleza',
      country: 'Brasil',
    },
    {
      name: 'São Paulo',
      country: 'Brasil',
    },
    {
      name: 'Rio de Janeiro',
      country: 'Brasil',
    },
    { name: 'Salvador', country: 'Brasil', },
    { name: "Porto Alegre", country: 'Brasil', },
    { name: 'Belo Horizonte', country: 'Brasil', },
  ]

  const dataitem = [

    { name: 'Segunda', graus: '19', },
    { name: "Terça", graus: 21, },
    { name: 'Quarta', graus: 28, },
    { name: 'Quinta', graus: 25, },
    { name: "Sexta", graus: 30, },
    { name: 'Sábado', graus: 35, },
    { name: 'Domingo', graus: 29, },
  ]



  const today = weatherData?.list[0]
  return (
    // <View>
    //   {weatherData ? (
    //     <Text>{`Temperatura: ${weatherData?.main?.temp}`}</Text>
    //   ) : (
    //     <Text>Carregando...</Text>
    //   )}
    // </View>
    <View
      style={styles.container}
    >

      <View
      style={styles.containersearch}
      >
        <View style={styles.search} >

          <TextInput
            style={styles.inputText}
            placeholder="Selecione a cidade"
            onChangeText={(val) => setCity(val)}
            value={city}

          />
          <TouchableOpacity style={styles.btn}
            onPress={() => props.navigation.navigate('Details',
              { name: city }
            )}
          >
            <MaterialCommunityIcons
              name={"magnify"}
              size={36}
              color='red'
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{
        // flex: 1,
        padding: 5,
        borderColor: '#000',
        // borderWidth:1,

        display: 'flex',
        height: 150

      }}>
        <FlatList
          horizontal

          data={cities}
          renderItem={({ item }) => (
            <Card style={{}} name={item.name} country={item.country} navigation={props.navigation} />
          )}
        />
      </View>
      <View style={styles.image}>
        <CloudSvg width={100} height={100} />
      </View >

      <View
        style={{
          // flex: 1,
          padding: 5,
          borderColor: '#000',
          // borderWidth:1,

          display: 'flex',
          height: 150

        }}
      // style={styles.bodyContainer}
      >
        <FlatList
          data={dataitem}
          horizontal
          renderItem={({ item }) => (

            <View style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              width: 80,
              height: 80,
              top: 45,
              backgroundColor: '#ffffff82',
              borderRadius: 10,
              paddingVertical: 3,
              marginHorizontal: 4

            }}>
              <Ionicons
                name='cloudy-night'
                size={36}
                color='#4d4d4d'
              />
              <Text
              // style={styles.title}
              >{item.name}</Text>
              <Text>{item.graus}°</Text>
            </View>
          )}
        />
      </View>

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#6495ED80',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  safe: {
    flex: 1,
    display: 'flex',
  },
  
  containersearch: {
    height: '8%',
    marginHorizontal: 4,
    position: 'relative',
    zIndex: 50,
    
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '100%',
    paddingLeft: 20

  },
  headerContainer: {
    position: 'absolute',
    top: 350,
    // display: 'flex',
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  tempText: {
    fontSize: 38,
    color: '#fff',
    padding: 5
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  },
  bodyContainer: {
    position: 'relative',
    // flexDirection:'row',
    // flex: 2,
    // display:'flex',
    // alignItems: 'flex-end',
    // alignContent:'space-between',
    // justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#000',
    // paddingLeft: 5,
    // marginBottom: -150
    height: 50

  },
  info: {
    position: 'relative',
    flexDirection: 'row',
    flex: 3,
    display: 'flex',
    alignItems: 'flex-end',
    alignContent: 'space-between',
    justifyContent: 'space-around',
    paddingLeft: 5,
    marginBottom: 14
  },
  view: {
    // flex: 1,
    direction: 'row',
    height: '17%',
    width: '100%',
    // marginBottom:55,
    borderRadius: 155,

  },
  searchview: {
    flex: 1,
    height: 30,
    width: '100%',
    // marginTop:-155,
    borderRadius: 155,
    // backgroundColor:'#fff',
    zIndex: 50
  },
  inputText: {
    padding: '0 0 6px 6px',
    height: 40,
    flex: 1,
    borderRadius:5

  },
  btn: {
    borderRadius: 100, padding: 3, margin: 1
  },
  locations: {
    display: 'flex',
    width: '100%',
    backgroundColor: 'gray',
    top: 45,
    borderRadius: 10,
    padding: 18,
    justifyContent: 'space-around',
    position: 'absolute',
    zIndex: 10
  },
  cardlocation: {
    // flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'space-between',
    padding: 6,
    paddingHorizontal: 8,
    marginBottom: 5,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    fontSize: 20,
    fontWeight: 'bold',

    // border:'1px solid black',

  },
  textcard: {
    fontSize: 20,
    fontWeight: 'bold',
    zIndex: 100

  },
  image: {
    // flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 3,
    alignItems: 'center',
    top: 1,
    height: 300,

  }
})
