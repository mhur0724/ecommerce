import React from "react";
import classes from "./CartOrderSummary.module.css";

const CartOrderSummary = () => {
  return (
    <div className={classes.CartOrderSummary}>
      <div>
        <p>Subtotal (1 item)</p>
        <p>$69</p>
      </div>
      <div>
        <p>{"Est. taxes & fees"}</p>
        <p>$8.22</p>
      </div>
      <div>
        <p>{"Est. Total"}</p>
        <p>$69</p>
      </div>
      <button>Check Out</button>
    </div>
  );
};

export default CartOrderSummary;
