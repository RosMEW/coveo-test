import React, { useState } from 'react';
import './SearchBar.scss';

type searchBarProps = {
    onSubmit: () => void;
    onChange: () => void;
};

const SearchBar = (props: searchBarProps) => {
    const [showInput, setShowInput] = useState(false);

    return (
        <form onSubmit={props.onSubmit} className='search-bar'>
            <input
                type='text'
                name='search'
                className={
                    showInput ? 'search-bar__input square' : 'search-bar__input'
                }
                onChange={props.onChange}
            />
            <button
                type='reset'
                className={
                    showInput ? 'search-bar__btn close' : 'search-bar__btn'
                }
                onClick={() => {
                    showInput ? setShowInput(false) : setShowInput(true);
                }}
            />
        </form>
    );
};

export default SearchBar;
