import React, { useState, useMemo, createContext } from "react";
import PageNotFound from "./PageNotFound";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import FrontPage from "./FrontPage";
import Discription from "./productDetailsComp/Description";
import CartPage from "./myCart/CartPage";
import SignUpPage from "./Login_SignUpPage/SignUpPage";
import LoginPage from "./Login_SignUpPage/LoginPage";
import ForgotPswdPage from "./Login_SignUpPage/ForgotPswdPage";
import AboutUs from "./TnC_AboutUs/AboutUs";
export const CartContext = createContext();
export const NevbarCountContext = createContext();
export const CartQuantityContext = createContext()
function App() {
  const myItems = localStorage.getItem("my-cart") || "{}";
  const myItemsValue = JSON.parse(myItems);
  const [cart, setCart] = useState(myItemsValue);
  const handleAddToCart = (productId, count) => {
    let oldcount = cart[productId] || 0;
    const totalItem = { ...cart, [productId]: oldcount + count };
    setCart(totalItem);
    const cartString = JSON.stringify(totalItem);
    localStorage.setItem("my-cart", cartString);
  };
  const totalCount = useMemo(
    () =>
      Object.keys(cart).reduce(
        (previous, current) => previous + cart[current],
        0
      ),
    [cart]
  );
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <NevbarCountContext.Provider value={totalCount}>
              <MainLayout />
            </NevbarCountContext.Provider>
          }
        >
          <Route index element={<FrontPage />} />
          <Route
            path="/product/:id/"
            element={
              <CartQuantityContext.Provider value={handleAddToCart}>
                <Discription />
              </CartQuantityContext.Provider>
            }
          />
          <Route
            path="/cart"
            element={
              <CartContext.Provider value={setCart}>
                <CartPage cartProductCount={cart} />
              </CartContext.Provider>
            }
          />
          <Route path="/signUpPage" element={<SignUpPage />} />
          <Route path="/logInPage" element={<LoginPage />} />
          <Route path="/forgetPswd" element={<ForgotPswdPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
