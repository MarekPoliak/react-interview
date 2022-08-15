import * as React from "react";
import { useEffect, useState } from "react";
import ProductList from "../src/components/Products/ProductList";
import Cart from "../src/components/Products/Cart";
import Filter from "../src/components/Products/Filter";

interface StoragedCount {
  id: string;
  itemCount: string;
}

export interface Product {
  name: string;
  id: number;
  image: string;
  price: Price;
  itemCount: number;
}

export interface Price {
  full: number;
  currency: string;
}

function App() {
  const localStorageCartKey = "cart";
  const [products, setProducts] = useState<Product[]>([]);
  const [filterInput, setFilterInput] = useState<string>("");

  function getCart(): Map<string, StoragedCount> {
    let stringCart = localStorage.getItem(localStorageCartKey);
    let countArr =
      stringCart == null ? [] : (JSON.parse(stringCart) as StoragedCount[]);
    return new Map(countArr.map((i) => [i.id, i]));
  }

  const handleProductCountChange = (key: string, value: string) => {
    let cart = getCart();
    if (value === "0") {
      cart.delete(key);
    } else {
      cart.set(key, { id: key, itemCount: value });
    }
    if (cart.size == 0) {
      localStorage.removeItem(localStorageCartKey);
    } else {
      localStorage.setItem(
        localStorageCartKey,
        JSON.stringify(Array.from(cart.values()))
      );
    }
    setProducts((prevState) => {
      const newState = [...prevState];
      let product = newState.find((product) => product.id === parseInt(key));
      if (product == null) {
        return prevState;
      }
      product.itemCount = parseInt(value);
      return newState;
    });
  };

  function getProducts() {
    fetch("products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json: Product[]) {
        let productsJson = json;
        productsJson.sort();
        let cart = getCart();
        const productsWithItemCount = productsJson.map((product) => {
          let storagedCount = cart.get(String(product.id));
          const itemCount =
            storagedCount == null ? 0 : parseInt(storagedCount.itemCount);
          return { ...product, itemCount: itemCount };
        });
        setProducts(productsWithItemCount);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Filter setFilterInput={setFilterInput} />
      <ProductList
        handleProductCountChange={handleProductCountChange}
        products={products.filter((product) =>
          filterInput == null
            ? true
            : product.name.toLowerCase().includes(filterInput.toLowerCase())
        )}
      />
      <Cart
        cartProducts={products}
        handleProductCountChange={handleProductCountChange}
      />
    </div>
  );
}

export default App;
