import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name,img,seller,price,catagory,ratings}=props.product;
    const {product,handleAddToCart}=props;
        return (
          <div className="product-container">
            <img src={img} alt="" />
            <div className="product-info">
              <h3>{name}</h3>
              <p>Price:${price}</p>
              <p>
                <small>Seller:{seller}</small>
              </p>
              <p>
                <small>Ratings:{ratings}</small>
              </p>
            </div>
            <button onClick={() => props.handleAddToCart(product)}>
              <p>Add to Cart</p>
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
          </div>
        );
};

export default Product;