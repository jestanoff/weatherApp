import axios from 'axios';

axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5';

class OpenWeatherApi {
    constructor(units, coords) {
        Object.assign(this, {
            apiKey: '5511b92677ed43a19313731b3e96e27a',
            path: '/weather',
            units,
            coords,
        });
    }

    getCurrentWeather() {
        return axios({
            url: this.path,
            method: 'get',
            params: {
                units: this.units,
                lat: this.coords.latitude,
                lon: this.coords.longitude,
                appid: this.apiKey,
            },
        });
        // .get(`${this.path}?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`);
    }
}

export default OpenWeatherApi;
