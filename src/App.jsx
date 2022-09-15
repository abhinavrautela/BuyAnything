import React, { useState } from "react";
import PageNotFound from "./PageNotFound";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import FrontPage from "./FrontPage";
import ProductDetail from "./ProductDetail";
import CartPage from "./myCart/CartPage";

function App() {
  const myItems = localStorage.getItem("my-cart") || "{}";
  const myItemsValue = JSON.parse(myItems);
  const [cart, setCart] = useState(myItemsValue);
  console.log("cart", cart);
  const handleAddToCart = (productId, count) => {
    let oldcount = cart[productId] || 0;
    const totalItem = { ...cart, [productId]: oldcount + count };
    setCart(totalItem);
    const cartString = JSON.stringify(totalItem);
    localStorage.setItem("my-cart", cartString);
  };
  const totalCount = Object.keys(cart).reduce(
    (previous, current) => previous + cart[current],
    0
  );
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout totalProduts={totalCount} />}>
          <Route index element={<FrontPage />} />
          <Route
            path="/product/:id/"
            element={<ProductDetail onClick={handleAddToCart} />}
          />
          <Route path="/cart" element={<CartPage cartProductCount={cart} />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
