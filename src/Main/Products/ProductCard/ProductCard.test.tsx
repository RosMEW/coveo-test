import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';

import ProductCard from './ProductCard';
import store from '../../../store/store';

const setup = () => {
    const onLabelClick = jest.fn();
    const props = {
        link: '',
        imgURL: '',
        title: '',
        country: '',
        region: '',
        price: 0,
        labels: [{ field: 'field', value: 'value' }],
        onLabelClick
    };
    cleanup();
    const wrapper = render(
        <Provider store={store}>
            <ProductCard {...props} />
        </Provider>
    );
    return {
        wrapper,
        props,
        onLabelClick,
        getFirstLabel: () => wrapper.container.querySelector('.label')
    };
};

describe('<ProductCard />', () => {
    it('should display label', () => {
        const { getFirstLabel } = setup();
        expect(getFirstLabel()).toBeTruthy();
    });
    it('should call onLabelClick', () => {
        const { getFirstLabel, onLabelClick, props } = setup();
        fireEvent.click(getFirstLabel() as Element);
        expect(onLabelClick).toHaveBeenCalledWith(props.labels[0]);
    });
});
