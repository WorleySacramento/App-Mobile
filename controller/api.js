export const API_KEY = 'd4877b30b8149ad66052bab7c6e80b2b'

export default async function forecast(lat, lon, days) {
    const api_key = API_KEY;

    try {
        const response = await axios.get('http://api.openweathermap.org/data/2.5', {
            params: {
                lat: lat,
                lon: lon,
                units: 'metric',
                cnt: days,
                appid: api_key,
                lang: 'pt',
            },
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error(error);
        // You might want to handle the error appropriately (e.g., return an error response).
        throw error;
    }
}
