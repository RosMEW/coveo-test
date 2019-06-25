import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { state } from '../../shared/types';
import * as actionTypes from '../../store/actions/actionTypes';
import './Selection.scss';

const Selection = () => {
    const dispatch = useDispatch();
    const termSelected = useSelector(
        (state: state) => state.selection.termSelected
    );

    return (
        <div className='selection--container'>
            <div className='selection'>
                <div>Sélection</div>
                <div className='selection__list'>
                    {termSelected.map(term => (
                        <div className='selection__item' key={term.value}>
                            <div className='selection__item--name'>
                                {term.text ? term.text : term.value}
                            </div>
                            <div
                                className='selection__item--icon'
                                onClick={() =>
                                    dispatch({
                                        type: actionTypes.REMOVE_TERM,
                                        field: term.field,
                                        value: term.value
                                    })
                                }>
                                <img src='/svg/close.svg' alt='icon-close' />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='selection__remove-all'>
                    Effacer Tout
                    <div
                        className='selection__remove-all--icon'
                        onClick={() =>
                            dispatch({ type: actionTypes.REMOVE_ALL_TERMS })
                        }>
                        <img src='/svg/spinner.svg' alt='icon-clear-all' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selection;
