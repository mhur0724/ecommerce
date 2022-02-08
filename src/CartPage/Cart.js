import React from "react";
import classes from "./Cart.module.css";
import CartOrderSummary from "./CartComponents/CartOrderSummary";
import CartItem from "./CartComponents/CartItem";
const Cart = () => {
  return (
    <div className={classes.Cart}>
      <div className={classes.cartbuttons}>
        <button>Continue Shopping</button>
        <button>Check Out</button>
      </div>

      <div className={classes.cartContent}>
        <CartItem />
        <CartOrderSummary />
      </div>
    </div>
  );
};

export default Cart;
