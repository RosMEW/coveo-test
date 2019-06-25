import React from 'react';
import { useDispatch } from 'react-redux';

import * as actionTypes from '../../../store/actions/actionTypes';
import './ProductCard.scss';

type productCardProps = {
    link: string;
    imgURL: string;
    title: string;
    country: string;
    region: string;
    price: number;
    labels: { field: string; value: string }[];
};

const ProductCard = (props: productCardProps) => {
    const dispatch = useDispatch();

    return (
        <div className='product-card'>
            <a target='_blank' href={props.link} className='product-card__img'>
                <img src={props.imgURL} alt={props.title} />
            </a>
            <div className='product-card--container'>
                <div>
                    <div className='product-card__title'>{props.title}</div>
                    <div className='product-card__location'>
                        {props.country} <span> {props.region}</span>
                    </div>
                </div>
                <div className='product-card__bottom'>
                    <div className='labels'>
                        {props.labels.map(label => (
                            <p
                                className='label'
                                key={label.value}
                                onClick={() =>
                                    dispatch({
                                        type: actionTypes.ADD_TERM,
                                        field: label.field,
                                        value: label.value
                                    })
                                }>
                                {label.value}
                            </p>
                        ))}
                    </div>
                    <div className='price'>
                        <span>$</span>{' '}
                        {props.price ? props.price.toFixed(2) : ''}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
