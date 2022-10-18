import React from "react";
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
import UserProvider from "./ContextProvider/UserProvider";
import CartProvider from "./ContextProvider/CartProvider";
import AlertProvider from "./ContextProvider/AlertProvider";

function App() {
  return (
    <div>
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<FrontPage />} />
                <Route path="/product/:id/" element={<Discription />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/test" element={<Test />} />
              </Route>

              <Route path="/signUpPage" element={<SignUpPage />} />
              <Route path="/login" element={<EnhancedLogin />} />

              <Route path="/forgetPswd" element={<ForgotPswdPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AlertProvider>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
