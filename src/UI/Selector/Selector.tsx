import React from 'react';
import './Selector.scss';

const Selector = (props: { type: 'sort' | 'page' }) => {
    const sortOptions = (
        <React.Fragment>
            <option value='default'>Trier par</option>
            <option value='priceAsc'>Prix Croissant</option>
            <option value='priceDes'>Prix Décroissant</option>
            <option value='dateAsc'>Date Croissant</option>
            <option value='dateDes'>Date Décroissant</option>
            <option value='vintageAsc'>Millésime Croissant</option>
            <option value='vintageDes'>Millésime Décroissant</option>
        </React.Fragment>
    );

    const pageOptions = (
        <React.Fragment>
            <option value='default'>12</option>
            <option value='24'>24</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
        </React.Fragment>
    );

    const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value);
    };
    return (
        <div className='selector'>
            <select
                onChange={selectHandler}
                defaultValue='default'
                className={props.type === 'page' ? 'page' : ''}>
                {props.type === 'sort' ? sortOptions : pageOptions}
            </select>
        </div>
    );
};

export default Selector;
