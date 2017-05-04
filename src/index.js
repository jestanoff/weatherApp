import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import './styles/sass/main.scss';

const container = document.getElementById('app-root');

if (container) {
    render(
        <Provider store={ store }>
            <App />
        </Provider>,
        container,
    );
}
