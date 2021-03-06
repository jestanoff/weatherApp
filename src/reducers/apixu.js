import {
    FETCH_APIXU,
    FETCH_APIXU_SUCCESS,
    FETCH_APIXU_ERROR,
} from '../constants/actions';

const initialState = {
    current: null,
    forecast: null,
    error: null,
    isFetching: false,
};

export default (state = initialState, { type, payload, error }) => {
    switch (type) {
    case FETCH_APIXU:
        return {
            ...state,
            isFetching: true,
        };
    case FETCH_APIXU_SUCCESS:
        return {
            ...state,
            ...payload,
            isFetching: false,
        };
    case FETCH_APIXU_ERROR:
        return {
            ...state,
            error,
            isFetching: false,
        };
    default:
        return state;
    }
};
