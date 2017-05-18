import axios from 'axios';

class ApixuApi {
    constructor(coords) {
        Object.assign(this, {
            apiKey: 'a164c9f6b68a499e858214958170605',
            baseURL: 'https://api.apixu.com/v1/',
            forecastDays: 5,
            jsonForecast: 'forecast.json',
            jsonSearch: 'search.json',
            coords,
        });
    }

    fetchData() {
        const q = this.coords ? `${this.coords.latitude},${this.coords.longitude}` : 'auto:ip';
        return axios({
            url: this.baseURL + this.jsonForecast,
            method: 'get',
            params: {
                q,
                key: this.apiKey,
                days: this.forecastDays,
            },
        });
    }

    searchAutocomplete(term) {
        return axios({
            url: this.baseURL + this.jsonSearch,
            method: 'get',
            params: {
                q: term,
            },
        });
    }
}

export default ApixuApi;
