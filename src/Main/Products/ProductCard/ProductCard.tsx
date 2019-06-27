import React from 'react';

import './ProductCard.scss';

type label = { field: string; value: string };

type productCardProps = {
    link: string;
    imgURL: string;
    title: string;
    country: string;
    region: string;
    price: number;
    labels: label[];
    onLabelClick: (label: label) => void;
};

const ProductCard = (props: productCardProps) => {
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
                                onClick={() => props.onLabelClick(label)}>
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
