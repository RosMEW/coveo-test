import React from 'react';

import Selector from '../../UI/Selector/Selector';
import ProductCard from './ProductCard/ProductCard';
import Pagination from '../../UI/Pagination/Pagination';

import './Products.scss';

const Products = () => {
    let productCards = (
        <React.Fragment>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </React.Fragment>
    );

    return (
        <div className='products'>
            <div className='products--container'>
                <div className='products__header'>
                    <Selector type='sort' />
                    <div className='products__header--right'>
                        <div className='results'>68 Articles</div>
                        <Selector type='page' />
                        <div className='results'>Résultats Par Page</div>
                    </div>
                </div>
                <div className='products__list'>{productCards}</div>
                <div className='products__footer'>
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default Products;
