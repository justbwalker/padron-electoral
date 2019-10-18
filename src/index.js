import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import App from './App';

import './index.css';

const rootComponent = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(rootComponent, document.getElementById('root'));

