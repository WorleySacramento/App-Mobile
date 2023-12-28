// import axios from 'axios';
// require('dotenv').config();

// const apiKey = process.env.API_KEY;
// const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast';

// const getWeatherData = async (city) => {
//   try {
//     const response = await axios.get(BASE_URL, {
//       params: {
//         q: city,
//         appid: apiKey,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Erro ao obter dados do clima:', error);
//     throw error;
//   }
// };

// export default getWeatherData;


// async function getWeatherData() {
//     try {
//         const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=London&appid=YOUR_API_KEY');
 
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
 
//         const data = await response.json();
//         console.log(data);
 
//     } catch (error) {
//         console.log('There was a problem with the fetch operation: ', error);
//     }
//  }
 
// export default getWeatherData;

// const apiKey = '8f7e884fa739f5e1eabdaec60b75aa92';
// const url = 'http://api.openweathermap.org/data/2.5/forecast';
// const city = "YOUR_CITY_NAME"; 

// function getWeatherData() {
//     fetch(`${url}?q=${city}&appid=${apiKey}`)
//       .then(response => response.json())
//       .then(data => {
//         const forecastList = data.list;
//         forecastList.forEach(forecast => {
//           console.log(`Date: ${forecast.dt_txt},
//             Temperature: ${forecast.main.temp} K,
//             Description: ${forecast.weather[0].description}`);
//         });
//       })
//       .catch(error => console.error("Error:", error));
// }

// const getWeatherData = async (city) => {
//   try {
//     const response = await fetch(`${url}?q=${city}&appid=${apiKey}`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Erro ao obter dados do clima:', error);
//     throw error;
//   }
// };

// export default getWeatherData;
