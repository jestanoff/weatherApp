import { GET_GEOLOCATION_SUCCESS, GET_GEOLOCATION_ERROR, SET_UNITS } from '../constants/actions';
import { METRIC } from '../constants';

const initialState = {
    units: METRIC,
    coords: {
        latitude: null,
        longitude: null,
    },
    error: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
    case GET_GEOLOCATION_SUCCESS:
        return {
            ...state,
            coords: {
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
            },
        };
    case SET_UNITS:
        return {
            ...state,
            units: action.unit,
        };
    case GET_GEOLOCATION_ERROR:
        return {
            ...state,
            error: action.payload,
        };
    default:
        return state;
    }
}
