import React from 'react';
import earpods from './images/earbuds.jpg';


function ProductCard({ product }) {
    return (
        <div className='card  p-2 py-4 my-3' id='card'>
            <img src={earpods} alt="product" />
            <div id='card-content'>
                <h1 className='text-dark fw-bold'>{product.name}</h1>
                <h3>{product.model}</h3>
                <h6>{product.description}</h6>
                <h6>{product.description2}</h6>
                <h6>{product.price}</h6>
                <div className='my-3'>
                    <button className='btn btn-primary'>Add To Card</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;