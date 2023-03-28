import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart
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
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon style={{marginLeft: '20px'}} icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;