// import OpenWeatherAPI from '../utils/api/openWeather';
import ApixuAPI from '../utils/api/apixu';
import * as actions from '../constants/actions';


export const fetchOpenWeather = () => ({ type: actions.FETCH_OPEN_WEATHER });
export const fetchOpenWeatherCurrentSuccess = data => (
    { type: actions.FETCH_OPEN_WEATHER_CURRENT_SUCCESS, payload: data }
);
export const fetchOpenWeatherCurrentError = error => (
    { type: actions.FETCH_OPEN_WEATHER_CURRENT_ERROR, error }
);
export const fetchOpenWeatherForecastSuccess = data => (
    { type: actions.FETCH_OPEN_WEATHER_FORECAST_SUCCESS, payload: data }
);
export const fetchOpenWeatherForecastError = error => (
    { type: actions.FETCH_OPEN_WEATHER_FORECAST_ERROR, error }
);

export const fetchApixu = () => ({ type: actions.FETCH_APIXU });
export const fetchApixuSuccess = data => (
    { type: actions.FETCH_APIXU_SUCCESS, payload: data }
);
export const fetchApixuError = error => (
    { type: actions.FETCH_APIXU_ERROR, error }
);

export const getGeolocationSuccess = coords => ({
    type: actions.GET_GEOLOCATION_SUCCESS,
    payload: coords,
});
export const getGeolocationError = error => ({
    type: actions.GET_GEOLOCATION_ERROR,
    payload: error,
});
export const setUnits = unit => ({ type: actions.SET_UNITS, unit });

export function fetchWeather(units, coords) {
    return (dispatch) => {
        // const openWeather = new OpenWeatherAPI(units, coords);
        const apixu = new ApixuAPI(coords);

        /* Disable openweather for now
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
        } */

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
        } else {
            // Get geolocation by IP
            dispatch(fetchWeather(getState().settings.units));
        }
    };
