import { FETCH_SEARCH_ITEMS, SEARCH_ITEMS_SUCCESS, SEARCH_ITEMS_ERROR } from '../constants/actions';

export default function (state = [], { type, payload }) {
    switch (type) {
    case FETCH_SEARCH_ITEMS:
        return {
            ...state,
            coords: {
                latitude: payload.latitude,
                longitude: payload.longitude,
            },
        };
    case SEARCH_ITEMS_SUCCESS:
    case SEARCH_ITEMS_ERROR:
    default:
        return state;
    }
}
