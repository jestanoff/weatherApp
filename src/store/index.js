import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { colorSamplerMiddleware, getGeolocationMiddleware } from '../middleware';

const middlewares = [
    colorSamplerMiddleware,
    getGeolocationMiddleware,
    thunk,
    createLogger(),
];

const defaultState = {
    openWeather: {},
    apixu: {},
    settings: {},
    searchItems: [],
};

export default createStore(
    rootReducer,
    defaultState,
    compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
);
