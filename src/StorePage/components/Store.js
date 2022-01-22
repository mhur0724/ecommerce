import React from "react";
import { storeItems } from "./StoreData";
import classes from "./Store.module.css";

const Store = () => {
  return (
    <div className={classes.container}>
      {storeItems.map((storeItem) => (
        <div key={storeItem.id} className={classes["store-item"]}>
          <div className={classes["image-container"]}>
            <img src={storeItem.img} alt="" />
          </div>
          <div className={classes["product-info"]}>
            <h1>{storeItem.product}</h1>
            <p>{storeItem.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Store;
