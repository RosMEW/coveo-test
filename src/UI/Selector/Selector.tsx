import React from 'react';
import { useDispatch } from 'react-redux';
import { Dictionary } from 'lodash';

import * as actionTypes from '../../store/actions/actionTypes';
import './Selector.scss';

const sortOptionValue: Dictionary<{ sortOrder: string; sortField?: string }> = {
    priceAsc: {
        sortOrder: 'fieldascending',
        sortField: 'tpprixnum'
    },
    priceDes: {
        sortOrder: 'fielddescending',
        sortField: 'tpprixnum'
    },
    dateAsc: {
        sortOrder: 'dateascending'
    },
    dateDes: {
        sortOrder: 'datedescending'
    },
    vintageAsc: {
        sortOrder: 'fieldascending',
        sortField: 'tpmillesime'
    },
    vintageDes: {
        sortOrder: 'fielddescending',
        sortField: 'tpmillesime'
    }
};

const Selector = (props: { type: 'sort' | 'page' }) => {
    const dispatch = useDispatch();

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
            <option value='50'>48</option>
            <option value='96'>96</option>
        </React.Fragment>
    );

    const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const input = event.target.value;
        if (props.type === 'sort')
            dispatch({
                type: actionTypes.SORT_RESULTS,
                sortOrder: sortOptionValue[input].sortOrder,
                sortField: sortOptionValue[input].sortField
            });
        if (props.type === 'page')
            dispatch({
                type: actionTypes.UPDATE_RESULTS_PER_PAGE,
                resultPerPage: input
            });
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
