import {
    FETCH_OPEN_WEATHER,
    FETCH_OPEN_WEATHER_SUCCESS,
    FETCH_OPEN_WEATHER_ERROR,
} from '../actions';

export default (state = { data: {}, error: null }, { type, payload, error }) => {
    switch (type) {
    case FETCH_OPEN_WEATHER:
        return {
            ...state,
            isFetching: true,
        };
    case FETCH_OPEN_WEATHER_SUCCESS:
        return {
            ...state,
            data: payload,
            isFetching: false,
        };
    case FETCH_OPEN_WEATHER_ERROR:
        return {
            ...state,
            error,
            isFetching: false,
        };
    default:
        return state;
    }
};
