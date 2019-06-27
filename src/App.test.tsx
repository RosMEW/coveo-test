import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';

import store from './store/store';
import * as actionTypes from './store/actions/actionTypes';
import App from './App';

const setup = () => {
    cleanup();
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
};

describe('<App />', () => {
    it('it should update selection if a term was added', async () => {
        setup();
        store.dispatch({
            type: actionTypes.ADD_TERM,
            field: 'field',
            value: 'value'
        });
        store.dispatch({
            type: actionTypes.ADD_TERM,
            field: 'field',
            value: 'value1'
        });
        await wait();
        expect(store.getState().search.query.selection).toEqual({
            field: ['value', 'value1']
        });
    });
});

function wait(ms?: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
