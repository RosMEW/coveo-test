import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Nav from './Nav';
import store from '../store/store';
import * as actionTypes from '../store/actions/actionTypes';

const setup = () => {
    cleanup();
    const wrapper = render(
        <Provider store={store}>
            <Nav />
        </Provider>
    );
    return {
        wrapper,
        getNav: () => wrapper.container.querySelector('nav'),
        getNavSections: () =>
            wrapper.container.querySelectorAll('.nav-bar__item'),
        getNavMenu: () => wrapper.container.querySelector('.nav-menu'),
        getTerms: () => wrapper.container.querySelectorAll('.item')
    };
};

describe('<Nav />', () => {
    describe('Store with 1 term', () => {
        beforeAll(() => {
            store.dispatch({
                type: actionTypes.UPDATE_GROUP_BY,
                groupBy: [
                    {
                        field: 'tpcategorie',
                        values: [{ value: 'TERM', numberOfResults: 100 }]
                    }
                ]
            });
        });
        it('should open navigation menu when hovering', () => {
            const { getNavSections, getNavMenu, getTerms } = setup();

            fireEvent.mouseEnter(getNavSections().item(0));

            expect((getNavMenu() as Element).className).not.toContain('hidden');
            expect(getTerms()).toHaveLength(1);
        });
        it('should close navigation menu when leaving nav', () => {
            const { getNavSections, getNavMenu, getNav } = setup();

            fireEvent.mouseEnter(getNavSections().item(0));
            fireEvent.mouseLeave(getNav() as Element);

            expect((getNavMenu() as Element).className).toContain('hidden');
        });
    });
});
