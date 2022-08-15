import React from "react";

import classes from "./ProductCard.module.css";
import PriceCard from "./PriceCard";
import ProductButton from "./ProductButton";
import { Product } from "../../App";

const ProductCard = (props: {
  product: Product;
  handleProductCountChange: (arg0: string, arg1: string) => void;
}) => {
  return (
    <div className={classes.product_card}>
      <div className={classes.product_image}>
        <img src={props.product.image} alt="product" />
      </div>
      <div className={classes.product_name}>{props.product.name}</div>
      <div className={classes.product_price}>
        <PriceCard price={props.product.price} />
      </div>
      <div className={classes.product_button_container}>
        <ProductButton
          handleProductCountChange={props.handleProductCountChange}
          product={props.product}
        />
      </div>
    </div>
  );
};

export default ProductCard;
