import React from "react";

import classes from "./PriceCard.module.css";
import { Price } from "../../App";

/**
 * we return decimal part of price as string
 * if price 3.09, this returns decimal part (09)
 * we need to add '0' for decimals 00-09
 * @param price
 */
function getPriceDecimalPart(price: number) {
  const priceDecimalPart = Math.round((price - Math.floor(price)) * 100);
  return priceDecimalPart > 0 && priceDecimalPart < 10
    ? "0" + priceDecimalPart
    : priceDecimalPart;
}

const PriceCard = (props: { price: Price }) => {
  return (
    <div className={classes.price_container}>
      <div className={classes.price_full}>{Math.floor(props.price.full)}</div>
      <div className={classes.price_decimal}>
        {getPriceDecimalPart(props.price.full)}
      </div>
      <div className={classes.price_currency}>{props.price.currency}</div>
    </div>
  );
};

export default PriceCard;
