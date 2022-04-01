import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart}=props;
    console.log(cart);
    let total=0;
    let shipping=0;
     let tax = 0;
     let grandTotal=0;
    for(const product of cart){
        total=total+product.price;
        shipping=shipping+product.shipping;
         let fullTotal = total + shipping;
         tax = parseFloat((fullTotal * 0.1).toFixed(2));
         grandTotal=total+shipping+tax;
    }
   
   

    return (
      <div className='cart'>
        <h2 id='order'>this is order</h2>
        <p>Selected Item:{cart.length}</p>
        <p>Total price:${total}</p>
        <p>Total Shipping Charge:${shipping}</p>
        <p>Tax:{tax}</p>
        <h4>Grand Total:{grandTotal.toFixed(2)}</h4>
      </div>
    );
};

export default Cart;