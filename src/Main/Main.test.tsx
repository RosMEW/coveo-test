import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';

import Main from './Main';
import store from '../store/store';
import * as actionTypes from '../store/actions/actionTypes';

const setup = () => {
    cleanup();
    const wrapper = render(
        <Provider store={store}>
            <Main />
        </Provider>
    );
    return {
        wrapper,
        getErrorModal: () =>
            wrapper.container.getElementsByClassName('error')[0],
        getLoader: () => wrapper.container.getElementsByClassName('loader')[0]
    };
};

describe('<Main />', () => {
    it('should not display ErrorModal', () => {
        const { getErrorModal } = setup();

        expect(getErrorModal()).toBeFalsy();
    });

    it('should display ErrorModal', () => {
        const { getErrorModal } = setup();

        store.dispatch({ type: actionTypes.SEARCH_FAIL });
        expect(getErrorModal()).toBeTruthy();
    });

    it('should not display Loader', () => {
        const { getLoader } = setup();

        expect(getLoader()).toBeFalsy();
    });

    it('should display Loader', () => {
        const { getLoader } = setup();

        store.dispatch({ type: actionTypes.SEARCH_START });
        expect(getLoader()).toBeTruthy();
    });
});
