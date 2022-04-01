import React from 'react';

const Cart = (props) => {
    const {length}=props.cart
    return (
      <div>
        <h2>this is order</h2>
        <p>Selected item:{length}</p>
      </div>
    );
};

export default Cart;