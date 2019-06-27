import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { map } from 'lodash';

import { productFields } from '../shared/navItems';
import { state, groupByResult } from '../shared/types';
import * as actionTypes from '../store/actions/actionTypes';
import './QuickSearch.scss';

const QuickSearch = (props: { hideModal: () => void }) => {
    const dispatch = useDispatch();
    const groupBy = useSelector((state: state) => state.selection.groupBy);

    return (
        <div className='quick-search'>
            <div className='quick-search__backDrop' onClick={props.hideModal} />
            <div className='quick-search__modal'>
                <div className='quick-search__modal--container'>
                    <div className='icon-close' onClick={props.hideModal}>
                        <img
                            src='/svg/close-circle.svg'
                            alt='icon-close-circle'
                        />
                    </div>
                    {map(productFields, (productField, key) => (
                        <SearchField
                            key={key}
                            field={key}
                            title={productField.value}
                            group={groupBy.find(group => group.field === key)}
                            onTermClick={(field, value) =>
                                dispatch({
                                    type: actionTypes.ADD_TERM,
                                    field,
                                    value
                                })
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

type searchFieldProps = {
    title: string;
    field: string;
    group?: groupByResult;
    onTermClick: (field: string, value: string) => void;
};
function SearchField(props: searchFieldProps) {
    return (
        <div className='search-field'>
            <div className='search-field__title'>{props.title}</div>
            <div className='search-field__list'>
                {props.group &&
                    props.group.values.slice(0, 6).map(item => (
                        <div
                            className='item'
                            key={item.value}
                            onClick={() =>
                                props.onTermClick(props.field, item.value)
                            }>
                            {item.value}
                            <span>{item.numberOfResults}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default QuickSearch;
