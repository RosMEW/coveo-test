import React from 'react';

import './Selection.scss';

const Selection = () => {
    const selectionList = (
        <div className='selection__item'>
            <div className='selection__item--name'>biere rouge</div>
            <div
                className='selection__item--icon'
                onClick={() => console.log('updateCurrentState')}>
                <img src='/svg/close.svg' alt='icon-close' />
            </div>
        </div>
    );

    return (
        <div className='selection'>
            <div>Sélection</div>
            <div className='selection__list'>{selectionList}</div>
            <div className='selection__remove-all'>
                Effacer Tout
                <div
                    className='selection__remove-all--icon'
                    onClick={() => console.log('clear all')}>
                    <img src='/svg/spinner.svg' alt='icon-clear-all' />
                </div>
            </div>
        </div>
    );
};

export default Selection;
