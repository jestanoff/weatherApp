import { GET_GEOLOCATION_SUCCESS, GET_GEOLOCATION_ERROR } from '../actions';

const initialState = { latitude: null, longitude: null };

export default function (state = initialState, { type, payload }) {
    switch (type) {
    case GET_GEOLOCATION_SUCCESS:
        return {
            ...state,
            latitude: payload.latitude,
            longitude: payload.longitude,
        };
    case GET_GEOLOCATION_ERROR:
    default:
        return state;
    }
}
