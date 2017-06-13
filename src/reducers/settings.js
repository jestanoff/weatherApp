import * as actions from '../constants/actions';
import { METRIC } from '../constants';

const initialState = {
    units: METRIC,
    coords: {
        latitude: null,
        longitude: null,
    },
    sampleColor: null,
    error: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
    case actions.GET_GEOLOCATION_SUCCESS:
        return {
            ...state,
            coords: {
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
            },
        };
    case actions.SET_UNITS:
        return {
            ...state,
            units: action.unit,
        };
    case actions.GET_GEOLOCATION_ERROR:
        return {
            ...state,
            error: action.payload,
        };
    case actions.SET_SAMPLE_COLOR:
        return {
            ...state,
            sampleColor: action.color,
        };
    default:
        return state;
    }
}
