import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <br />
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;