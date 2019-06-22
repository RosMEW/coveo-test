import React, { useState } from 'react';
import InputRange, { Range } from 'react-input-range';
import './PriceRange.scss';

const PriceRange = () => {
    const [value, setValue] = useState({ min: 0, max: 220 });

    return (
        <div className='price-range'>
            <InputRange
                step={5}
                minValue={0}
                maxValue={300}
                value={value}
                onChange={value => setValue(value as Range)}
            />
            <h4>
                Prix <span>CAD</span>
            </h4>
        </div>
    );
};

export default PriceRange;
