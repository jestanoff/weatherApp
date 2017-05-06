import { combineReducers } from 'redux';
import openWeather from './openWeather';
import apixu from './apixu';
import settings from './settings';

export default combineReducers({
    openWeather,
    apixu,
    settings,
});
