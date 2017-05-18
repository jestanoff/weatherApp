import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares = [
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
