import React, { useEffect, useState, useContext } from "react";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { getProductByIds, getProductsDetail } from "../api";
import Loader from "../Loader";

const CartPage = () => {
  // const [cartProduct, setCartProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  // const quantityMap = JSON.parse(localStorage.getItem("my-cart"));
  // useEffect(() => {
  //   const promise = Object.keys(quantityMap).map((e) => getProductByIds(e));
  //   Promise.all(promise).then((response) => {
  //     setLoading(false);
  //     setCartProduct(response);
  //   });
  // }, []);

  return (
    <div className="px-[10%] sm:px-[20%]">
      <div className="px-10 py-20 bg-white flex justify-end ">
        <div className="w-full">
         
            <CartList />
          
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
