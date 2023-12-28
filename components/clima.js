import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Switch, ViewComponent, TouchableOpacity, SafeAreaView, Image, ScrollView, FlatList,} from 'react-native';
// import {Calendar,CalendarList, Agenda,WeekCalendar, LocaleConfig, ExpandableCalendar } from 'react-native-calendars';
import getWeatherData from '../controller/controller';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons,} from '@expo/vector-icons';
import  Ionicons from '@expo/vector-icons/Ionicons';

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
const cities = [

{
  name: 'Fortaleza',
  country: 'Brasil',
},
{name:'São Paulo',
country: 'Brasil',
},
{name:'Rio de Janeiro',
country: 'Brasil',
},
{name:'Salvador',country: 'Brasil',},
{name:"Porto Alegre",country: 'Brasil',},
{name:'Belo Horizonte',country: 'Brasil',},
]


// const updateSearch = (search) => {
//   setSearch(search);
// };

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
      {/* <SafeAreaView  style={styles.safe}> */}
        {/* <Text>
          Cliiimaaa
        </Text> */}
      <View 
      // style={styles.containersearch}
      >
        <View style={styles.search} >
    {/* {   showSearch ? ( */}
    <TextInput
    style={styles.inputText}
      placeholder="Selecione a cidade"
      onChangeText={(val)=>setCity(val)}
      value={city}

    />
    {/* ): null 
    } */}
    <TouchableOpacity style={styles.btn}
    onPress={()=>props.navigation.navigate('Details',
    {name: city}
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
  <FlatList
  horizontal
  style={{
    // width:'100%',
    height:'0px',
    // backgroundColor:'white'
    flex:1

  }}
  data={cities}
  renderItem={({item})=>(
  <Card name={item.name} country={item.country} navigation={props.navigation}/>
  )}
  />
      {/* {
        locations.length > 0 && showSearch? (
          <View style={styles.locations}>
            {
              cities.map((loc, index) =>{ 
                const showBorder = index +1 !=locations.length;
                // const borderClass = showBorder ? styles={'red'} : '';
                return (
                <TouchableOpacity 
                key={index}
                style={styles.cardlocation}
                onPress={( )=>handleLocation(loc)}
                >
               <MaterialCommunityIcons name='map-marker' 
                  size={28}
                  color='red'/>
                  <Text style={styles.textcard}> {`${weatherData?.city?.name},  ${weatherData?.city.country}`}
                    
</Text>
                </TouchableOpacity>
               ) })
            }
          </View> */}
        {/* ):null */}
      {/* } */}
      <View style={styles.image}>
      {/* <Svg height="50%" width="50%" viewBox="0 0 100 100">

</Svg> */}
      {/* <Image source={require('../assets/icons/cloud-icon')}/> */}
<CloudSvg width={100} height={100}/>
      

      </View >
       {/* <View 
      style={styles.headerContainer}
      >
       
      <Text style={styles.tempText}>Temperatura:{weatherData?.list[0]?.main?.temp.toFixed(1)
      
      }˚</Text>
     
      <Text style={styles.tempText}>Parcial nublado</Text>
      </View> */}
      {/* <View
       style={styles.info}
       >
        <View>
        <Text 
        // style={styles.title}
        >So Sunny</Text>
        </View>
        <View>
        <Text 
        // style={styles.title}
        >So Sunny</Text>
        </View>
        <View>
        <Text 
        // style={styles.title}
        >So Sunny</Text>
        </View>
        </View> */}
      {/* {/* */}
      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal:15,
        alignItems:'center',


      }}
      showsHorizontalScrollIndicator={false}
       style={styles.bodyContainer}
       >
        <View style={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center',
          width:80,
          height:80,
          top:45,
          backgroundColor:'#afcdea',
          borderRadius:10,
          paddingVertical:3,
          marginHorizontal:4
        
        }}>
         <Image
                    src={`https://openweathermap.org/img/wn/${today?.weather[0]?.icon}@2x.png`}
                    width={80}
                    height={80}
                  />
        <Text 
        // style={styles.title}
        >Segunda</Text>
        <Text>21°</Text>
        </View>

        <View style={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center',
          width:80,
          height:80,
          top:45,
          backgroundColor:'#afcdea',
          borderRadius:10,
          paddingVertical:3,
          marginHorizontal:4

        
        }}>
          <Ionicons
          name='cloudy-night'
          size={36}
          color='#4d4d4d'
          />
        <Text 
        // style={styles.title}
        >Terça</Text>
        <Text>21°</Text>
        </View>

        <View style={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center',
          width:80,
          height:80,
          top:45,
          backgroundColor:'#afcdea',
          borderRadius:10,
          paddingVertical:3,
          marginHorizontal:4
        
        }}>
          <Ionicons
          name='cloudy-night'
          size={36}
          color='#4d4d4d'
          />
        <Text 
        // style={styles.title}
        >Quarta</Text>
        <Text>21°</Text>
        </View>

        <View style={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center',
          width:80,
          height:80,
          top:45,
          backgroundColor:'#afcdea',
          paddingVertical:3,
          marginHorizontal:4
        
        }}>
          <Ionicons
          name='cloudy-night'
          size={36}
          color='#4d4d4d'
          />
        <Text 
        // style={styles.title}
        >Quinta</Text>
        <Text>21°</Text>
        </View>

        <View style={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center',
          width:80,
          height:80,
          top:45,
          backgroundColor:'#afcdea',
          borderRadius:10,
          paddingVertical:3,
          marginHorizontal:4
        
        }}>
          <Ionicons
          name='cloudy-night'
          size={36}
          color='#4d4d4d'
          />
        <Text 
        // style={styles.title}
        >Sexta</Text>
        <Text>21°</Text>
        </View>
        <View style={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center',
          width:80,
          height:80,
          top:45,
          backgroundColor:'#afcdea',
          borderRadius:10,
          paddingVertical:3,
          marginHorizontal:4
        
        }}>
          <Ionicons
          name='cloudy-night'
          size={36}
          color='#4d4d4d'
          />
        <Text 
        // style={styles.title}
        >Sábado</Text>
        <Text>21°</Text>
        </View>
        <View style={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center',
          width:80,
          height:80,
          top:45,
          backgroundColor:'#afcdea',
          borderRadius:10,
          paddingVertical:3,
          marginHorizontal:4
        
        }}>
          <Ionicons
          name='cloudy-night'
          size={36}
          color='#4d4d4d'
          />
        <Text 
        // style={styles.title}
        >domingo</Text>
        <Text>21°</Text>
        </View>
        
      </ScrollView>
      {/* </SafeAreaView> */}
    </View>
  
  );
}


const styles = StyleSheet.create({
  container: {
    display:'flex',
    // position:'relative',
    flex: 1,
    backgroundColor: 'blue',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  safe:{
   flex: 1,
   display:'flex',
  },
  containersearch:{
    height:'8%',
    marginHorizontal:4,
    position:'relative',
    zIndex:50
  },
  search:{
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    borderRadius:'100%'

  },
  headerContainer: {
    position:'absolute',
    top:350,
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
    padding:5
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
    // position:'relative',
    // flexDirection:'row',
    // flex: 1,
    // display:'flex',
    // alignItems: 'flex-end',
    // alignContent:'space-between',
    // justifyContent: 'space-around',
    paddingLeft: 5,
    // marginBottom: 14
  },
  info: {
    position:'relative',
    flexDirection:'row',
    flex: 3,
    display:'flex',
    alignItems: 'flex-end',
    alignContent:'space-between',
    justifyContent: 'space-around',
    paddingLeft: 5,
    marginBottom: 14
  },
  view:{
    // flex: 1,
    direction: 'row',
    height: '17%',
    width:'100%',
    // marginBottom:55,
    borderRadius: 155,
    
  },
  searchview:{
    flex: 1,
    height: 30,
    width:'100%',
    // marginTop:-155,
    borderRadius: 155,
    // backgroundColor:'#fff',
    zIndex:50
  },
  inputText:{
    padding:'0 0 6px 6px',
    height:30,
    flex:1,

  },
  btn:{
    borderRadius:100, padding:3, margin:1
  },
  locations:{
    display:'flex',
    width:'100%',
    backgroundColor:'gray',
    top:45,
    borderRadius:10,
    padding:18,
    justifyContent:'space-around',
    position:'absolute',
    zIndex:10
  },
  cardlocation:{
    // flex:1,
    flexDirection:'row',
    alignItems:'center',
    // justifyContent:'space-between',
    padding:6,
    paddingHorizontal:8,
    marginBottom:5,
    borderBottomColor:'#000',
    borderBottomWidth:1,
    fontSize:20,
    fontWeight:'bold',
    
    // border:'1px solid black',

  },
  textcard:{
    fontSize:20,
    fontWeight:'bold',
    zIndex:100

  },
  image:{
    flexDirection:'row',
    justifyContent:'center',
    zIndex:3,
    alignItems:'center',
    top:10
  }
})
