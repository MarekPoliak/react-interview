import React from "react";
import Button from "./Button";
import classes from "./ProductButton.module.css";
import { Product } from "../../App";

const ProductButton = (props: {
  handleProductCountChange: (arg0: string, arg1: string) => void;
  product: Product;
}) => {
  function addProductHandler() {
    props.handleProductCountChange(
      String(props.product.id),
      String(props.product.itemCount + 1)
    );
  }

  function removeProductHandler() {
    props.handleProductCountChange(
      String(props.product.id),
      String(props.product.itemCount - 1)
    );
  }

  if (props.product == null || props.product.itemCount === 0) {
    return <Button onClick={addProductHandler}>Do košíku</Button>;
  }
  return (
    <div className={classes.button_container}>
      <Button class={classes.remove_button} onClick={removeProductHandler}>
        -
      </Button>
      <div className={classes.item_count}>{props.product.itemCount}</div>
      <Button class={classes.add_button} onClick={addProductHandler}>
        +
      </Button>
    </div>
  );
};

export default ProductButton;
