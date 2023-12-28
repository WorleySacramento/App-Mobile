import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Card({name,country, navigation}) {
  return (
    <TouchableOpacity
    onPress={()=> navigation.navigate('Details', {name})}
    style={{
        flex:1,
        backgroundColor:'#fff',
        borderRadius:5,
        // marginVertical:8,
       marginHorizontal:10,
    //    height:-500,
       borderColor:'#000',
       borderWidth:1,
       padding: 5
        }}
    
    >
      <View style={{position:'relative'}}>
      <Text
      style={{fontSize:22, fontWeight:'bold', color:'#000',height:'100%'}}>{name}, {country}</Text>

      </View>
    </TouchableOpacity>
  )
}