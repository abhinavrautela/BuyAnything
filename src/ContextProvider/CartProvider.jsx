import React, { useState, useMemo, useEffect } from "react";
import { withUser } from "./withProvider";
import { CartContext } from "./Contexts";
import { getCart, saveCart, getProductByIds } from "../api";

const CartProvider = ({ children, isLoggedIn }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (isLoggedIn) {
      getCart().then((savedCart) => setCart(savedCart));
    } else {
      quantityMapToCart(JSON.parse(localStorage.getItem("my-cart") || "{}"));
    }
  }, [isLoggedIn]);

  const quantityMapToCart = (quantityMap) => {
    getProductByIds(Object.keys(quantityMap)).then((products) => {
      const savedCart = products.map((p) => ({
        product: p,
        quantity: quantityMap[p.id],
      }));
      setCart(savedCart);
    });
  };

  const addToCart = (productId, count) => {
    const quantityMap = cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );
    let oldcount = quantityMap[productId] || 0;
    const newCart = { ...quantityMap, [productId]: oldcount + count };
    updateCart(newCart);
  };

  const updateCart = (quantityMap) => {
    if (isLoggedIn) {
      saveCart(quantityMap).then((response) => quantityMapToCart(quantityMap));
    } else {
      localStorage.setItem("my-cart", JSON.stringify(quantityMap));
    }
  };

  const totalCount = cart.reduce(
    (previous, current) => previous + current.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cart, updateCart, addToCart, totalCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default withUser(CartProvider);
