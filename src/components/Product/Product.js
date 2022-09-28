import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    
    const{name, img, price, seller, ratings}=props.product;
    
    
    return (
        <div className='product'>
          
          <div className="product-js">
          <img src={img} alt="" />
          <p>Name:{name}</p>
          <p>Price:{price}</p>
            <p>Seller: {seller}</p>
            <p>Ratings:{ratings}</p>
          </div>
          <button onClick={()=>props.handelClick(props.product)} className='btn-card'>
            <p>Add to card</p>
            <FontAwesomeIcon></FontAwesomeIcon>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
    );
};

export default Product;