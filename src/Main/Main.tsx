import React from 'react';
import { useSelector } from 'react-redux';

import Selection from './Selection/Selection';
import Products from './Products/Products';
import Loader from '../UI/Loader/Loader';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

import { state } from '../shared/types';
import './Main.scss';

const Main = () => {
    const { error, loading } = useSelector((state: state) => state.search);

    return (
        <main>
            {error ? <ErrorModal /> : null}
            {loading ? <Loader /> : <Products />}
            <Selection />
        </main>
    );
};

export default Main;
