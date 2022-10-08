import React, { useState, useMemo, createContext } from "react";
import PageNotFound from "./PageNotFound";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import FrontPage from "./FrontPage";
import Discription from "./productDetailsComp/Description";
import CartPage from "./myCart/CartPage";
import SignUpPage from "./Login_SignUpPage/SignUpPage";
import EnhancedLogin from "./Login_SignUpPage/LoginPage";
import ForgotPswdPage from "./Login_SignUpPage/ForgotPswdPage";
import AboutUs from "./TnC_AboutUs/AboutUs";
import Test from "./Test";
import UserRoute from "./Login_SignUpPage/UserRoute";
import AuthRoute from "./Login_SignUpPage/AuthRoute";
import { useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import {
  AlertContext,
  UserContext,
} from "./Alert_User_ContextProvider/Contexts";
export const CartContext = createContext();
export const NevbarCountContext = createContext();
export const CartQuantityContext = createContext();

function App() {
  const myItems = localStorage.getItem("my-cart") || "{}";
  const myItemsValue = JSON.parse(myItems);
  const [userLoading, setUserLoading] = useState(true);
  const [cart, setCart] = useState(myItemsValue);
  const [user, setUser] = useState();
  const [alert, setAlert] = useState();

  const removeAlert = () => {
    setAlert(undefined);
  };
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
  const userData = { user, setUser };
  const cartData = { cart, setCart };
  const alertData = { alert, setAlert, removeAlert };

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
  if (userLoading) {
    return <Loader size={"full"} />;
  }
  return (
    <div>
      <UserContext.Provider value={userData}>
        <AlertContext.Provider value={alertData}>
          <Routes>
            <Route
              path="/"
              element={
                <NevbarCountContext.Provider value={totalCount}>
                  <UserRoute>
                    <MainLayout />
                  </UserRoute>
                </NevbarCountContext.Provider>
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
                <AuthRoute>
                  <SignUpPage />
                </AuthRoute>
              }
            />
            <Route
              path="/login"
              element={
                <AuthRoute>
                  <EnhancedLogin />
                </AuthRoute>
              }
            />

            <Route path="/forgetPswd" element={<ForgotPswdPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AlertContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
