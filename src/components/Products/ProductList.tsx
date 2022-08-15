import React from "react";

import Card from "./Card";

import classes from "./ProductList.module.css";
import ProductCard from "./ProductCard";
import { Product } from "../../App";

const ProductList = (props: {
  products: Product[];
  handleProductCountChange: (arg0: string, arg1: string) => void;
}) => {
  return (
    <Card className={classes.products_container}>
      <ul className={classes.grid_list}>
        {props.products.map((product) => (
          <li key={product.id}>
            <ProductCard
              handleProductCountChange={props.handleProductCountChange}
              product={product}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ProductList;
