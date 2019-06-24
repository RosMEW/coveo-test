import React from 'react';
import './ProductCard.scss';

const ProductCard = () => {
    let labels = (
        <React.Fragment>
            <p className='label'>label1</p>
            <p className='label'>label2</p>
            <p className='label'>label3asdf</p>
            <p className='label'>label3</p>
            <p className='label'>label3</p>
            <p className='label'>label3</p>
        </React.Fragment>
    );

    return (
        <div className='product-card'>
            <div className='product-card__img'>image</div>
            <div className='product-card__title'>title</div>
            <div className='product-card__location'>
                pays / <span>region</span>
            </div>
            <div className='product-card__bottom'>
                <div className='labels'>{labels}</div>
                <div className='price'>
                    <span>$</span> 88
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
