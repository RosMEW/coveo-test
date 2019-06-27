import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';

import SearchBar from './SearchBar';
import store from '../../store/store';

const setup = () => {
    const onSubmit = jest.fn();
    cleanup();
    const wrapper = render(
        <Provider store={store}>
            <SearchBar onSubmit={onSubmit} />
        </Provider>
    );
    return {
        wrapper,
        onSubmit,
        getInput: () => wrapper.container.querySelector('input')
    };
};

describe('<SearchBar />', () => {
    it('should display input', () => {
        const { getInput } = setup();
        expect(getInput()).toBeTruthy();
    });
    it('should submit search term', () => {
        const { onSubmit, getInput } = setup();
        const input = getInput() as Element;
        fireEvent.change(input, { target: { value: 'term' } });
        fireEvent.submit(input);
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith('term');
    });
});
