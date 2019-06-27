import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';

import QuickSearch from './QuickSearch';
import store from '../store/store';
import * as actionTypes from '../store/actions/actionTypes';
import { groupByResult } from '../shared/types';

const setup = () => {
    const hideModal = jest.fn();

    cleanup();
    const wrapper = render(
        <Provider store={store}>
            <QuickSearch hideModal={hideModal} />
        </Provider>
    );
    return {
        wrapper,
        hideModal,
        getQuickSearch: () => wrapper.container.querySelector('.quick-search'),
        getTerms: () => wrapper.container.querySelectorAll('.item'),
        getBackdrop: () =>
            wrapper.container.querySelector('.quick-search__backDrop'),
        getCloseButton: () => wrapper.container.querySelector('.icon-close')
    };
};

describe('<QuickSearch />', () => {
    describe('Store with 1 term', () => {
        beforeAll(() => {
            store.dispatch({
                type: actionTypes.UPDATE_GROUP_BY,
                groupBy: [
                    {
                        field: 'tpcategorie',
                        values: [{ value: 'TERM', numberOfResults: 100 }]
                    }
                ] as groupByResult[]
            });
        });

        it('should display 1 term', () => {
            const { getQuickSearch, getTerms, getBackdrop } = setup();
            expect(getQuickSearch()).toBeTruthy();
            expect(getBackdrop()).toBeTruthy();
            expect(getTerms()).toHaveLength(1);
        });

        it('should add a term to selection when clicking on it', () => {
            const { getTerms } = setup();
            const term = getTerms().item(0);

            fireEvent.click(term);

            expect(store.getState().selection.termSelected).toEqual([
                {
                    field: 'tpcategorie',
                    text: undefined,
                    value: 'TERM'
                }
            ]);
        });
    });

    describe('hideModal', () => {
        it('should call hideModal when clicking backDrop', async () => {
            const { getBackdrop, hideModal } = setup();
            fireEvent.click(getBackdrop() as Element);
            expect(hideModal).toHaveBeenCalledTimes(1);
        });
        it('should call hideModal when clicking close button', async () => {
            const { getCloseButton, hideModal } = setup();
            fireEvent.click(getCloseButton() as Element);
            expect(hideModal).toHaveBeenCalledTimes(1);
        });
    });
});
