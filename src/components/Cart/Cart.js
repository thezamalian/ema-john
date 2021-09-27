import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    const totalReducer = (prev, product) => prev + product.price;
    const total = cart.reduce( totalReducer, 0 );

    // let total = 0;
    // for(const product of cart) {
    //     total += product.price;
    // } 

    const shipping = 15;
    const tax = (total + shipping) * 0.1;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Ordered: {props.cart.length}</h4>
            <p>Total: ${total.toFixed(2)}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;