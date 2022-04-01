import React from 'react';

const Cart = (props) => {
    const {length}=props.cart
    return (
      <div>
        <h2>this is order</h2>
        <p>Selected Item:{length}</p>
      </div>
    );
};

export default Cart;