<<<<<<< HEAD
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
=======
import React, { useContext, useRef } from "react";
import CartContext from "./cart-context";
import classes from "./Cart.module.css";
const Cart = () => {
  const cartCtx = useContext(CartContext);
  const sizeRef = useRef();
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const changeSize = () => {
    console.log();
  };
  return (
    <div className={classes.cart}>
      <div className={classes.cartItems}>
        {cartCtx.items.map((item) => (
          <div className={classes.cartItem}>
            <img src={item.img} alt="" />
            <ul>
              <li>{item.product}</li>
              <li>Size: {item.size}</li>
              <li>{`$${item.price}`}</li>
              <li className={classes.amount}>Qty: {item.amount}</li>
              <li>
                <button onClick={cartItemRemoveHandler.bind(null, item.id)}>
                  -
                </button>
              </li>
              <li>
                <button onClick={cartItemAddHandler.bind(null, item)}>+</button>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div>
        <span>Total Amount:</span> {totalAmount}
        <div>{hasItems && <button>Order</button>}</div>
>>>>>>> cart
      </div>
    </div>
  );
};

export default Cart;
