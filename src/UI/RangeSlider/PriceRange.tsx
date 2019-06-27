import React, { useState } from 'react';
import InputRange, { Range } from 'react-input-range';
import { useDispatch } from 'react-redux';

import * as actionTypes from '../../store/actions/actionTypes';
import './PriceRange.scss';

const PriceRange = () => {
    const [value, setValue] = useState({ min: 0, max: 680 });
    const dispatch = useDispatch();

    return (
        <div className='price-range'>
            <InputRange
                step={5}
                minValue={0}
                maxValue={1000}
                value={value}
                onChange={value => setValue(value as Range)}
                onChangeComplete={() =>
                    dispatch({
                        type: actionTypes.ADD_PRICE_TERM,
                        field: 'tpprixnum',
                        value: `${value.min}..${value.max}`,
                        text: `$${value.min} ~ $${value.max}`
                    })
                }
            />
            <h4>
                Prix <span>CAD</span>
            </h4>
        </div>
    );
};

export default PriceRange;
