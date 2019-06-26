import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Selector from '../../UI/Selector/Selector';
import ProductCard from './ProductCard/ProductCard';
import Pagination from '../../UI/Pagination/Pagination';
import TopOfPage from '../../UI/Buttons/TopOfPage';

import { state, product } from '../../shared/types';
import { parseSplitGroup } from '../../helpers/utils';
import * as actionTypes from '../../store/actions/actionTypes';
import './Products.scss';

type labels = { field: string; value: string }[];

const Products = () => {
    const products = useSelector((state: state) => state.search.results);
    const total = useSelector((state: state) => state.search.total);
    const dispatch = useDispatch();

    const getLabels = (product: product) =>
        [
            {
                field: 'tpcategorie',
                value: product.raw.tpcategorie
            },
            {
                field: 'tpformat',
                value: product.raw.tpformat
            },
            {
                field: 'tpobservationsgustativestexture',
                value: product.raw.tpobservationsgustativestexture
            },
            ...parseSplitGroup(product.raw.tpcepagenomsplitgroup).map(el => ({
                field: 'tpcepagenomsplitgroup',
                value: el
            }))
        ].filter(
            el => el.value && el.value !== 'Autre (s) cépage (s)'
        ) as labels;

    return (
        <div className='products'>
            <div className='products--container'>
                <div className='products__header'>
                    <Selector type='sort' />
                    <div className='products__header--right'>
                        <div className='results'>{total} Articles</div>
                        <Selector type='page' />
                        <div className='results'>Résultats Par Page</div>
                    </div>
                </div>
                <div className='products__list'>
                    {products.map(product => (
                        <ProductCard
                            key={product.uniqueId}
                            link={product.clickUri}
                            imgURL={product.raw.tpthumbnailuri}
                            title={product.title}
                            country={product.raw.tppays}
                            region={product.raw.tpregion}
                            price={product.raw.tpprixnum}
                            labels={getLabels(product)}
                            onLabelClick={label =>
                                dispatch({
                                    type: actionTypes.ADD_TERM,
                                    field: label.field,
                                    value: label.value
                                })
                            }
                        />
                    ))}
                </div>
                <div className='products__footer'>
                    <Pagination />
                </div>
            </div>
            <TopOfPage />
        </div>
    );
};

export default Products;
