import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import classes from "./Cart.module.css";
import CartProduct from "./CartProduct";
import { Product } from "../../App";

const Cart = (props: {
  cartProducts: Product[];
  handleProductCountChange: (arg0: string, arg1: string) => void;
}) => {
  function getTotalPrice() {
    let totalPrice = 0;
    props.cartProducts.forEach(
      (product) =>
        (totalPrice = totalPrice + product.price.full * product.itemCount)
    );
    return totalPrice.toFixed(2);
  }

  return (
    <div className={classes.cart}>
      <div className={classes.cart_header}>
        <FontAwesomeIcon icon={faBasketShopping} />
        <div className={classes.cart_price}>{getTotalPrice()} Kč</div>
      </div>
      <ul>
        {props.cartProducts
          .filter((product) => product.itemCount > 0)
          .map((product) => (
            <li key={product.id}>
              <CartProduct
                handleProductCountChange={props.handleProductCountChange}
                product={product}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cart;
