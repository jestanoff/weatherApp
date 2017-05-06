import axios from 'axios';

class ApixuApi {
    constructor(coords) {
        Object.assign(this, {
            apiKey: 'a164c9f6b68a499e858214958170605',
            baseURL: 'https://api.apixu.com/v1/',
            forecastDays: 5,
            json: 'forecast.json',
            coords,
        });
    }

    fetchData() {
        return axios({
            url: this.baseURL + this.json,
            method: 'get',
            params: {
                q: `${this.coords.latitude},${this.coords.longitude}`,
                key: this.apiKey,
                day: this.forecastDays,
            },
        });
    }
}

export default ApixuApi;
