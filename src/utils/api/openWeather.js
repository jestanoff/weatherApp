import axios from 'axios';

class OpenWeatherApi {
    constructor(units, coords) {
        Object.assign(this, {
            apiKey: '5511b92677ed43a19313731b3e96e27a',
            baseURL: 'http://api.openweathermap.org/data/2.5',
            units,
            coords,
        });
    }

    fetchData(type) {
        return axios({
            url: this.baseURL + type,
            method: 'get',
            params: {
                units: this.units,
                lat: this.coords.latitude,
                lon: this.coords.longitude,
                appid: this.apiKey,
            },
        });
    }

    getCurrentWeather() {
        return this.fetchData('/weather');
    }

    getForecastWeather() {
        return this.fetchData('/forecast');
    }
}

export default OpenWeatherApi;
