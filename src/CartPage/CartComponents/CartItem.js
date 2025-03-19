import React from "react";
import classes from "./CartItem.module.css";
import testImg from "../../images/products/crewnecks.jpg";
const CartItem = () => {
  return (
    <div className={classes.CartItem}>
      <div className={classes.cartItem}>
        <img src={testImg} alt="" />
        <ul>
          <li>Product: Filler </li>
          <li>ID: Stuff </li>
          <li>Color: other </li>
          <li>Size: M</li>
        </ul>
        <div>
          <input type="number" placeholder={1} min={1} />
          <p>$30</p>
        </div>
        <button className={classes.deleteButton}>Delete</button>
      </div>
      <div className={classes.cartItem}>
        <img src={testImg} alt="" />
        <ul>
          <li>Product: Filler </li>
          <li>ID: Stuff </li>
          <li>Color: other </li>
          <li>Size: M</li>
        </ul>
        <div>
          <input type="number" placeholder={1} min={1} />
          <p>$30</p>
        </div>
        <button className={classes.deleteButton}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
