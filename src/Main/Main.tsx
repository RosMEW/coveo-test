import React from 'react';
import { useSelector } from 'react-redux';

import Selection from './Selection/Selection';
import Products from './Products/Products';
import Loader from '../UI/Loader/Loader';

import { state } from '../shared/types';
import './Main.scss';

const Main = () => {
    const loading = useSelector((state: state) => state.search.loading);

    return (
        <main>
            {loading ? <Loader /> : <Products />} <Selection />
        </main>
    );
};

export default Main;
