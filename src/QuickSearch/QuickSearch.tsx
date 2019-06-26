import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { map } from 'lodash';

import { productFields } from '../shared/navItems';
import { state } from '../shared/types';
import * as actionTypes from '../store/actions/actionTypes';
import './QuickSearch.scss';

const QuickSearch = (props: { onClick: () => void }) => {
    const dispatch = useDispatch();
    const groupBy = useSelector((state: state) => state.selection.groupBy);

    return (
        <div className='quick-search'>
            <div className='quick-search__backDrop' onClick={props.onClick} />
            <div className='quick-search__modal'>
                <div className='quick-search__modal--container'>
                    <div className='icon-close' onClick={props.onClick}>
                        <img
                            src='/svg/close-circle.svg'
                            alt='icon-close-circle'
                        />
                    </div>
                    {map(productFields, (value, key) => (
                        <div className='search-field' key={key}>
                            <div className='search-field__title'>
                                {value.value}
                            </div>
                            <div className='search-field__list'>
                                {groupBy
                                    .filter(group => group.field === key)
                                    .map(group =>
                                        group.values.slice(0, 6).map(item => (
                                            <div
                                                className='item'
                                                key={item.value}
                                                onClick={() =>
                                                    dispatch({
                                                        type:
                                                            actionTypes.ADD_TERM,
                                                        field: key,
                                                        value: item.value
                                                    })
                                                }>
                                                {item.value}
                                                <span>
                                                    {item.numberOfResults}
                                                </span>
                                            </div>
                                        ))
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuickSearch;
