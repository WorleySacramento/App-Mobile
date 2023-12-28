import { View, Text, ImageBackground, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../controller/api';

export default function Details(props) {
    const [data, setData] = useState()
    const { name } = props.route.params;

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
            .then((res) => res.json())
            .then(res => setData(res))
            .catch(err => console.error(err))
        // console.log(data.main.weather,' Aqui está tudo')


    }, []
    )
    // const today = data?.list[0].dt_txt

    const showWeatherData = (city) =>{
        console.log(city, 'Cidadenome')
    }
    

    const Data = ({title, value}) => <View 
    style={{flexDirection: "row", alignItems:"center", 
    justifyContent:'space-between', marginVertical:10}}
    >
        <Text style={{ fontSize: 22 }}>{title}:</Text>
        <Text style={{ fontSize: 22 }}>{value}</Text>
    </View>

    return (
        <View>
            <ImageBackground
                source={require('../assets/images/Percepcao-da-imagem-da-cidade.jpg')}
                style={{ width: "100%", height: "100%" }}
                imageStyle={{
                    opacity: 0.6,
                    backgroundColor: '#000'
                }}
            />
            {data ?
                <View style={{
                    position: "absolute",
                    zIndex: 10,
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                    alignSelf: 'center'

                }}>
                    <View style={{
                        flexDirection: "row",
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        height: "100%",
                    }}>
                        <View >
                                <Image
                    src="https://openweathermap.org/img/wn/01d.png"
                    width={80}
                    height={80}
                    style={{zIndex:60, position: "absolute",}}
                  />
                            <Text style={{ fontSize: 40, }}>{name}</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{data['weather'][0]['main']}</Text>
                        </View>
                        <Text style={{ fontSize: 40, }}>
                            {/* {(data['main']['temp'] - 273.15).toFixed(1)}&deg; C */}
                            {(data.main.temp - 273.15).toFixed(1)}° C
                        </Text>
                    </View>
                    <Text>Detalhes</Text>
                    <View>
                        <Data
                        value={` ${Math.round((data.wind.speed * 3.6)).toString().replace(/\B(?=(\d{ 3})+?\b)/g, ".")} km/h`}
                        title={'Vento'}
                         />
                         <Data
                         title={'Humidade'}
                         value={`${data.main.humidity}%`}
                         />
                         <Data
                        title={'Temp Min'}
                        icon='thermometer'
                        value={`${Math.min(data.main.temp_min, data.main.temp - 273.15).toFixed(1) }°C `}
                         />
                         {/* <Data
                         title={'Temp Max'}

                         value={`${Math.max(data.main.temp_max, data.main.temp - 273.15).toFixed(1) }°C `}
                         /> */}
                         {/* <Data
                         title={'Pressão'}
                         value={`${data.main.pressure} hPa`}
                         /> */}
                    
                    </View>
                </View>
                : null
            }
        </View>
    )
}