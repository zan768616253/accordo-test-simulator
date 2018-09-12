import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './App';
import StoreFactory from './stores';

const store = StoreFactory();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);
