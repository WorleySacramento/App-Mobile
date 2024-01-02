import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Card({ name, country, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', { name })}
      style={{
        // flex:1,
        backgroundColor: '#fff',
        borderRadius: 5,
        // marginVertical:8,
        marginHorizontal: 10,
        height: '100%',
        borderColor: '#000',
        borderWidth: 1,
        display: 'flex',

      }}

    >
      <View style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // display: 'flex',
        gap: 25,
        paddingTop: 15,
        marginHorizontal: 30
      }}>
        <Text style={{ fontSize: 22 }}>{name}</Text>
        <Text style={{ fontSize: 22,fontStyle:'italic' }}> {country}</Text>
      </View>
    </TouchableOpacity>
  )
}