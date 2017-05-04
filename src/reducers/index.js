import { combineReducers } from 'redux';
import openWeather from './openWeather';
import otherReducer from './otherReducer';
import coords from './coords';
import units from './units';

export default combineReducers({
    openWeather,
    other: otherReducer,
    coords,
    units,
});
