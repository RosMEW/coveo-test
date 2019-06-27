import React from 'react';
import { useDispatch } from 'react-redux';

import SearchBar from '../UI/SearchBar/SearchBar';
import ButtonOutline from '../UI/Buttons/ButtonOutline';
import PriceRange from '../UI/RangeSlider/PriceRange';

import * as actionTypes from '../store/actions/actionTypes';
import './Header.scss';

const Header = () => {
    const dispatch = useDispatch();

    return (
        <header>
            <div className='header'>
                <img src='/img/logo-saq.png' alt='SAQ-Logo' />
                <div className='header--right'>
                    <SearchBar
                        onSubmit={searchTerm =>
                            dispatch({
                                type: actionTypes.UPDATE_SEARCH_TERM,
                                searchTerm
                            })
                        }
                    />
                    <ButtonOutline
                        btnText='En Spécial'
                        onClick={() =>
                            dispatch({
                                type: actionTypes.ADD_TERM,
                                field: 'tpenspecial',
                                value: 'true',
                                text: 'En Spécial'
                            })
                        }
                    />
                    <PriceRange />
                </div>
            </div>
        </header>
    );
};

export default Header;
