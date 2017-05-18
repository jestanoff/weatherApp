import OpenWeatherAPI from '../utils/api/openWeather';
import ApixuAPI from '../utils/api/apixu';

export const FETCH_OPEN_WEATHER = 'FETCH_OPEN_WEATHER';
export const FETCH_OPEN_WEATHER_CURRENT_SUCCESS = 'FETCH_OPEN_WEATHER_CURRENT_SUCCESS';
export const FETCH_OPEN_WEATHER_CURRENT_ERROR = 'FETCH_OPEN_WEATHER_CURRENT_ERROR';
export const FETCH_OPEN_WEATHER_FORECAST_SUCCESS = 'FETCH_OPEN_WEATHER_FORECAST_SUCCESS';
export const FETCH_OPEN_WEATHER_FORECAST_ERROR = 'FETCH_OPEN_WEATHER_FORECAST_ERROR';

export const FETCH_APIXU = 'FETCH_APIXU';
export const FETCH_APIXU_SUCCESS = 'FETCH_APIXU_SUCCESS';
export const FETCH_APIXU_ERROR = 'FETCH_APIXU_ERROR';

export const GET_GEOLOCATION_SUCCESS = 'GET_GEOLOCATION_SUCCESS';
export const GET_GEOLOCATION_ERROR = 'GET_GEOLOCATION_ERROR';

export const SET_UNITS = 'SET_UNITS';

export const fetchOpenWeather = () => ({ type: FETCH_OPEN_WEATHER });
export const fetchOpenWeatherCurrentSuccess = data => (
    { type: FETCH_OPEN_WEATHER_CURRENT_SUCCESS, payload: data }
);
export const fetchOpenWeatherCurrentError = error => (
    { type: FETCH_OPEN_WEATHER_CURRENT_ERROR, error }
);
export const fetchOpenWeatherForecastSuccess = data => (
    { type: FETCH_OPEN_WEATHER_FORECAST_SUCCESS, payload: data }
);
export const fetchOpenWeatherForecastError = error => (
    { type: FETCH_OPEN_WEATHER_FORECAST_ERROR, error }
);

export const fetchApixu = () => ({ type: FETCH_APIXU });
export const fetchApixuSuccess = data => (
    { type: FETCH_APIXU_SUCCESS, payload: data }
);
export const fetchApixuError = error => (
    { type: FETCH_APIXU_ERROR, error }
);

export const getGeolocationSuccess = coords => ({ type: GET_GEOLOCATION_SUCCESS, payload: coords });
export const getGeolocationError = error => ({ type: GET_GEOLOCATION_ERROR, payload: error });
export const setUnits = unit => ({ type: SET_UNITS, unit });

export function fetchWeather(units, coords) {
    return (dispatch) => {
        const openWeather = new OpenWeatherAPI(units, coords);
        const apixu = new ApixuAPI(coords);

        if (coords) {
            dispatch(fetchOpenWeather());
            openWeather.getCurrentWeather()
                .then(response => response.data)
                .then(data => dispatch(fetchOpenWeatherCurrentSuccess(data)))
                .catch(error => dispatch(fetchOpenWeatherCurrentError(error)));
            openWeather.getForecastWeather()
                .then(response => response.data)
                .then(data => dispatch(fetchOpenWeatherForecastSuccess(data)))
                .catch(error => dispatch(fetchOpenWeatherForecastError(error)));
        }

        dispatch(fetchApixu());
        apixu.fetchData()
            .then(response => response.data)
            .then(data => dispatch(fetchApixuSuccess(data)))
            .catch(error => dispatch(fetchApixuError(error)));
    };
}

export const getGeolocation = () =>
    (dispatch, getState) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                ({ coords: { latitude, longitude } }) => {
                    dispatch(getGeolocationSuccess({ latitude, longitude }));
                    dispatch(fetchWeather(getState().settings.units, getState().settings.coords));
                },
                (error) => {
                    dispatch(fetchWeather(getState().settings.units, getState().settings.coords));
                    dispatch(getGeolocationError(error));
                },
            );
        }
        // Get geolocation by IP
        dispatch(fetchWeather(getState().settings.units));
    };
