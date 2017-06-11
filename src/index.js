import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import store from './store';
import './styles/sass/main.scss';

const container = document.getElementById('app-root');

if (container) {
    render(
        <Router>
            <Provider store={ store }>
                <App />
            </Provider>
        </Router>,
        container,
    );
}
