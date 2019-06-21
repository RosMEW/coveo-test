import React from 'react';

import './Header.scss';

const Header = () => (
    <header>
        <div className='header__container'>
            <img src='/img/logo-saq.png' alt='SAQ-Logo' />
            <div className='searchbar'>
                <div>searchbar</div>
                <div>searchtext</div>
            </div>
            <div className='promotion'>En special</div>
            <div className='price'>price</div>
        </div>
    </header>
);

export default Header;
