import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = (props: { onSubmit: (searchTerm: string) => void }) => {
    const [showInput, setShowInput] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                props.onSubmit(searchTerm);
            }}
            className='search-bar'>
            <input
                type='text'
                name='search'
                className={`search-bar__input ${showInput ? 'square' : ''}`}
                onChange={event => setSearchTerm(event.target.value)}
            />
            <button
                type='reset'
                className={`search-bar__btn ${showInput ? 'close' : ''}`}
                onClick={() =>
                    showInput ? setShowInput(false) : setShowInput(true)
                }
            />
        </form>
    );
};

export default SearchBar;
