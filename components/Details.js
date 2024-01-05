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

    const showWeatherData = (city) => {
        console.log(city, 'Cidadenome')
    }


    const Data = ({ title, value }) => <View
        style={{
            flexDirection: "row", alignItems: "center",
            justifyContent: 'center', marginVertical: 5, gap: 10
        }}
    >
        <Text style={{ fontSize: 22, fontWeight: '800' }}>{title}:</Text>
        <Text style={{ fontSize: 22, fontWeight: '500', fontStyle: 'italic' }}>{value}</Text>
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
                    zIndex: 0,
                    paddingVertical: 0,
                    paddingHorizontal: 1,
                    marginVertical: 50,
                    alignSelf: 'center',
                    backgroundColor: '#6495ED87',
                    // opacity:0.5,
                    width: "90%", height: "70%",
                    borderRadius: 30,
                    color: '#00'

                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 5,
                        // height: "100%",
                        color: '#000'
                    }}>
                        <View style={{
                            backgroundColor: '#ffffff80',
                            borderRadius: 30,
                            padding: 25,
                            width: '100%',
                            alignItems: 'center',
                        }}>

                            <Text style={{ fontSize: 40, color: 'black', fontWeight: 'bold', }}>{name}</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{data['weather'][0]['main']}</Text>
                            <Text style={{ fontSize: 40, }}>
                                {/* {(data['main']['temp'] - 273.15).toFixed(1)}&deg; C */}
                                {(data.main.temp - 273.15).toFixed(1)}° C
                            </Text>
                        </View>
                    </View>
                    <View style={{ position: "relative", padding: 10, gap: -10 }}>

                        <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', }}>
                            <Text style={{
                                position: "relative",
                                padding: 5,
                                fontSize: 25,
                                marginBottom: 5,
                                fontWeight: 'bold'
                            }}>Detalhes</Text>
                        </View>

                        <View style={{ backgroundColor: '#ffffff85', borderRadius: 20, padding: 25 }}>
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
                                value={`${Math.min(data.main.temp_min, data.main.temp - 273.15).toFixed(1)}°C `}
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
                </View>
                : null
            }
        </View>
    )
}