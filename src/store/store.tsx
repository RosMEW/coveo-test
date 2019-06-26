import { Reducer } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { searchReducer } from './reducers/searchReducer';
import { selectionReducer } from './reducers/selectionReducer';

const rootReducer = combineReducers({
    search: searchReducer as Reducer<any, any>,
    selection: selectionReducer as Reducer<any, any>
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
