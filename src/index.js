import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import IndexReducer from './index-reducer.js';
import IndexSaga from './index-saga.js';

const sagaMiddleware = createSagaMiddleware();
const composeSetup = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :compose;

const store = createStore(IndexReducer, composeSetup(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(IndexSaga);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

