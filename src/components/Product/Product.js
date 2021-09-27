import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>By: </small>{seller}</p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button
                    onClick={ () => props.handleAddToCart(props.product)} 
                    className="btn-regular"
                >{cartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;