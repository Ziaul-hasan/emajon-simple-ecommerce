import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const cart = props.cart
    // console.log(cart)
    // const price = cart.reduce((previous, current) => previous + current.price, 0);
    // const shipping = cart.reduce((previous, current) => previous + current.shipping, 0);
    let price = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }

        product.quantity = product.quantity || 1;
        price = price + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }
    const tax = price*3/100;
    const grandTotal = price + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order list</h4>
            <p>Selected items: {quantity}</p>
            <p>Total Price: $ {price}</p>
            <p>Total Shipping Charge: $ {shipping}</p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <h4>Grand Total: $ {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;