import React from "react";
import CartRow from "./CartRow";
import Button from "../buttons/Button";
import { getProductsDetail } from "../api";
import { useState, useEffect } from "react";
import EmptyCart from "./EmptyCart";
import Loader from "../Loader";

const CartList = ({setCart, productTotalCount}) => {
  const [loader, setLoader] = useState();
  const [cartProduct, setCartProduct] = useState([]);
  const removeProduct = (id) => {
    const mylocalStorage = JSON.parse(localStorage.getItem("my-cart"));
    const { [id]: deletedItem, ...rest } = mylocalStorage;
    setCart(rest)
    localStorage.setItem("my-cart", JSON.stringify(rest));
    setCartProduct(cartProduct.filter((e) => e.data.id != id));
  };
  useEffect(() => {
    const bigPromise = Object.keys(productTotalCount).map((e) =>
      getProductsDetail(e)
    );
    const response = Promise.all(bigPromise);
    response
      .then((response) => setCartProduct(response))
      .catch(setLoader(!loader));
  }, []);
   
  return (
    <div className="border-x lg:border  border-gray-300">
      <div className="lg:flex items-center w-full p-4 hidden ">
        <span className="w-[25%]"></span>
        <h1 className="w-[35%] font-bold text-gray-600">Product</h1>
        <h1 className="w-[15%] font-bold text-gray-600">Price</h1>
        <h1 className="w-[15%] font-bold text-gray-600">Quantity</h1>
        <h1 className="w-[10%] font-bold text-gray-600">Subtotal</h1>
      </div>
       
      <div>
        {cartProduct.length < 1 ? (
          <EmptyCart />
        ) : (
          <div>
            {cartProduct.map((e) => (
              <CartRow
                {...e.data}
                productTotalCount={productTotalCount}
                removeCartProduct={removeProduct}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 lg:flex-row w-full justify-between items-center p-5">
        <div className="w-full lg:w-auto">
          <h1 className="flex justify-between gap-2">
            <input
              type="text"
              className="bg-transparent w-[50%] placeholder:font-poppins placeholder:text-xs sm:placeholder:text-base placeholder:text-gray-400 px-2 outline-none border border-gray-300"
              placeholder="Coupon code"
            />
            <Button myClass={" text-xs lg:text-base px-2 py-2 w-full"}>
              Apply Coupon
            </Button>
          </h1>
        </div>
        <div className="w-full lg:w-auto">
          <Button
            myClass={
              " tracking-wide w-full lg:px-16 lg:py-2 text-gray-600 font-bold text-gray-600 opacity-60 hover:bg-gray-200 hover:text-gray-600 "
            }
          >
            Update Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
