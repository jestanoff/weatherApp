import {
    FETCH_OPEN_WEATHER,
    FETCH_OPEN_WEATHER_CURRENT_SUCCESS,
    FETCH_OPEN_WEATHER_CURRENT_ERROR,
    FETCH_OPEN_WEATHER_FORECAST_SUCCESS,
    FETCH_OPEN_WEATHER_FORECAST_ERROR,
} from '../actions';

const initialState = {
    current: {},
    forecast: {},
    error: null,
};

export default (state = initialState, { type, payload, error }) => {
    switch (type) {
    case FETCH_OPEN_WEATHER:
        return {
            ...state,
            isFetching: true,
        };
    case FETCH_OPEN_WEATHER_CURRENT_SUCCESS:
        return {
            ...state,
            current: payload,
            isFetching: false,
        };
    case FETCH_OPEN_WEATHER_FORECAST_SUCCESS:
        return {
            ...state,
            forecast: payload,
            isFetching: false,
        };
    case FETCH_OPEN_WEATHER_CURRENT_ERROR:
    case FETCH_OPEN_WEATHER_FORECAST_ERROR:
        return {
            ...state,
            error,
            isFetching: false,
        };
    default:
        return state;
    }
};
