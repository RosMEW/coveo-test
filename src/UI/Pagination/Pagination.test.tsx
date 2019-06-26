import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Pagination from './Pagination';
import store from '../../store/store';
import * as actionTypes from '../../store/actions/actionTypes';

const setup = () => {
    cleanup();
    const wrapper = render(
        <Provider store={store}>
            <Pagination />
        </Provider>
    );
    return {
        wrapper,
        getPage2: () =>
            wrapper.container.querySelector('a[aria-label="Page 2"]')
    };
};

describe('<Pagination />', () => {
    it('should not display Page 2', () => {
        const { getPage2 } = setup();
        expect(getPage2()).toBeFalsy();
    });
    it('should display Page 2', () => {
        const { getPage2 } = setup();
        store.dispatch({
            type: actionTypes.SEARCH_SUCCESS,
            results: [],
            total: 400
        });
        expect(getPage2()).toBeTruthy();
    });
    it('should update current page', () => {
        const { getPage2 } = setup();
        fireEvent.click(getPage2() as Element);

        const currentPage = store.getState().search.query.currentPage;
        expect(currentPage).toEqual(1);
    });
});
