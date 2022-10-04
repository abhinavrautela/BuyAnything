import React, { useState, useMemo, createContext } from "react";
import PageNotFound from "./PageNotFound";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import FrontPage from "./FrontPage";
import Discription from "./productDetailsComp/Description";
import CartPage from "./myCart/CartPage";
import SignUpPage from "./Login_SignUpPage/SignUpPage";
import LoginPage, { EnhancedLogin } from "./Login_SignUpPage/LoginPage";
import ForgotPswdPage from "./Login_SignUpPage/ForgotPswdPage";
import AboutUs from "./TnC_AboutUs/AboutUs";
import Test from "./Test";
import UserRoute from "./Login_SignUpPage/UserRoute";
import AuthRoute from "./Login_SignUpPage/AuthRoute";
import { useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
export const CartContext = createContext();
export const NevbarCountContext = createContext();
export const CartQuantityContext = createContext();
export const UserDetailContext = createContext();

function App() {
  const myItems = localStorage.getItem("my-cart") || "{}";
  const myItemsValue = JSON.parse(myItems);
  const [userLoading, setUserLoading] = useState(true);
  const [cart, setCart] = useState(myItemsValue);
  const [user, setUser] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("MyToken");
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
          setUserLoading(false);
        });
    } else setUserLoading(false);
  }, []);
  console.log("user", user);
  const userData = { user, setUser };
  const cartData = { cart, setCart };
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
  if(userLoading){
    return <Loader size={"full"}/>
  }
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <UserDetailContext.Provider value={userData}>
              <NevbarCountContext.Provider value={totalCount}>
                <UserRoute>
                  <MainLayout />
                </UserRoute>
              </NevbarCountContext.Provider>
            </UserDetailContext.Provider>
          }
        >
          <Route path="/" element={<FrontPage />} />
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
              <CartContext.Provider value={cartData}>
                <CartPage />
              </CartContext.Provider>
            }
          />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/test" element={<Test />} />
        </Route>
        <Route
          path="/signUpPage"
          element={
            <UserDetailContext.Provider value={userData}>
              <AuthRoute>
                <SignUpPage error={error} setError={setError} />
              </AuthRoute>
            </UserDetailContext.Provider>
          }
        />
        <Route
          path="/login"
          element={
            <UserDetailContext.Provider value={userData}>
              <AuthRoute>
                <EnhancedLogin
                  setUser={setUser}
                  error={error}
                  setError={setError}
                />
              </AuthRoute>
            </UserDetailContext.Provider>
          }
        />
        <Route path="/forgetPswd" element={<ForgotPswdPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
