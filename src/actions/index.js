import OpenWeatherApi from '../utils/api/openWeather';

export const FETCH_OPEN_WEATHER = 'FETCH_OPEN_WEATHER';
export const FETCH_OPEN_WEATHER_SUCCESS = 'FETCH_OPEN_WEATHER_SUCCESS';
export const FETCH_OPEN_WEATHER_ERROR = 'FETCH_OPEN_WEATHER_ERROR';
export const GET_GEOLOCATION_SUCCESS = 'GET_GEOLOCATION_SUCCESS';
export const GET_GEOLOCATION_ERROR = 'GET_GEOLOCATION_ERROR';

export const fetchOpenWeather = () => ({ type: FETCH_OPEN_WEATHER });

export const fetchOpenWeatherSuccess = data => (
    { type: FETCH_OPEN_WEATHER_SUCCESS, payload: data }
);

export const fetchOpenWeatherError = error => (
    { type: FETCH_OPEN_WEATHER_ERROR, error }
);
export const getGeolocationSuccess = coords => (
    { type: GET_GEOLOCATION_SUCCESS, payload: coords }
);
export const getGeolocationError = () => ({ type: GET_GEOLOCATION_ERROR });

export function fetchWeather(units, coords) {
    return (dispatch) => {
        dispatch(fetchOpenWeather());

        const openWeather = new OpenWeatherApi(units, coords);
        openWeather
            .getCurrentWeather()
            .then(response => response.data)
            .then(data => dispatch(fetchOpenWeatherSuccess(data)))
            .catch(error => dispatch(fetchOpenWeatherError(error)));
    };
}

export const getGeolocation = () => {
    if (navigator.geolocation) {
        return (dispatch, getState) => {
            navigator.geolocation.getCurrentPosition(
                ({ coords: { latitude, longitude } }) => {
                    dispatch(getGeolocationSuccess({ latitude, longitude }));
                    dispatch(fetchWeather(getState().units, getState().coords));
                },
                () => dispatch(getGeolocationError()),
            );
        };
    }
    // TODO: implement geolocation by IP
    return 'GEO_BY_IP';
};
