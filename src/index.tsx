import React, { Reducer } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import { searchReducer } from './store/reducers/searchReducer';
import { selectionReducer } from './store/reducers/selectionReducer';
import './index.scss';

const rootReducer = combineReducers({
    search: searchReducer as Reducer<any, any>,
    selection: selectionReducer as Reducer<any, any>
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
