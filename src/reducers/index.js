import { combineReducers } from 'redux';
import openWeather from './openWeather';
import apixu from './apixu';
import settings from './settings';
import searchItems from './searchItems';

export default combineReducers({
    openWeather,
    apixu,
    settings,
    searchItems,
});
