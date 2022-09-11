import React, { useState } from 'react';
import PageNotFound from './PageNotFound';
import { Routes, Route } from 'react-router-dom';
import FrontPage from './FrontPage';
import Navbar from "./Navbar";
import ProductDetail from './ProductDetail';
import CartPage from "./myCart/CartPage";


function App() {
	const myItems = localStorage.getItem("my-cart") || "{}"
	const myItemsValue = JSON.parse(myItems);
    const [cart, setCart] = useState(myItemsValue);
   const  handleAddToCart = (productId, count) => {
    let oldcount = cart[productId] || 0
	const totalItem = { ...cart, [productId]: oldcount + count };
    setCart(totalItem);
	const cartString = JSON.stringify(totalItem)
	localStorage.setItem("my-cart", cartString)
	
   }
    const totalCount = Object.keys(cart).reduce((previous, current) => previous + cart[current], 0)
	return (
    <div>
      <Navbar totalItems={totalCount} />
      <Routes>
        <Route index element={<FrontPage />} />
        <Route
          path="/product/:id/"
          element={<ProductDetail onClick={handleAddToCart} />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
