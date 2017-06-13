import * as actionCreators from '../actions';
import { GET_GEOLOCATION } from '../constants/actions';

export default ({ dispatch, getState }) => next => (action) => {
    if (action.type === GET_GEOLOCATION) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                ({ coords: { latitude, longitude } }) => {
                    dispatch(actionCreators.getGeolocationSuccess({ latitude, longitude }));
                    dispatch(actionCreators.fetchWeather(
                        getState().settings.units,
                        getState().settings.coords,
                    ));
                },
                (error) => {
                    dispatch(actionCreators.fetchWeather(
                        getState().settings.units,
                        getState().settings.coords,
                    ));
                    dispatch(actionCreators.getGeolocationError(error));
                },
            );
        } else {
            // Get geolocation by IP
            dispatch(actionCreators.fetchWeather(getState().settings.units));
        }
    }

    return next(action);
};
