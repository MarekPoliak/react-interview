import React from "react";

import classes from "./CartProduct.module.css";
import PriceCard from "./PriceCard";
import ProductButton from "./ProductButton";
import Button from "./Button";
import { Product } from "../../App";

const CartProduct = (props: {
  handleProductCountChange: (arg0: string, arg1: string) => void;
  product: Product;
}) => {
  function setItemCount0() {
    props.handleProductCountChange(String(props.product.id), "0");
  }

  return (
    <div className={classes.cart_product}>
      <div className={classes.cart_image}>
        <img src={props.product.image} />
      </div>
      <div className={classes.cart_product_name}>{props.product.name}</div>
      <div className={classes.remove_button}>
        <Button onClick={setItemCount0}>x</Button>
      </div>
      <div className={classes.cart_product_price}>
        <PriceCard price={props.product.price} />
      </div>
      <div className={classes.cart_product_button}>
        <ProductButton
          handleProductCountChange={props.handleProductCountChange}
          product={props.product}
        />
      </div>
    </div>
  );
};

export default CartProduct;
