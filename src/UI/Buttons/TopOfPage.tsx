import React from 'react';
import './TopOfPage.scss';

const TopOfPage = () => (
    <div className='top-of-page' onClick={() => window.scrollTo(0, 0)}>
        <img src='/svg/arrow-up.svg' alt='icon-top-of-page' />
    </div>
);

export default TopOfPage;
