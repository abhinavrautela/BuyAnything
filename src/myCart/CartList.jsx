import React, { useContext, useState } from "react";
import CartRow from "./CartRow";
import Button from "../buttons/Button";
import EmptyCart from "./EmptyCart";
import { CartContext } from "../App";

const CartList = ({ cartProduct, setCartProduct }) => {
  const [disabled, setDisabled] = useState(true);
  const [localCart, setLocalCart] = useState({});
  const cartHooks = { setDisabled };
  const { cart, setCart } = useContext(CartContext);
  const removeProduct = (id) => {
    const mylocalStorage = JSON.parse(localStorage.getItem("my-cart"));
    const { [id]: deletedItem, ...rest } = mylocalStorage;
    setCart(rest);
    localStorage.setItem("my-cart", JSON.stringify(rest));
    setCartProduct(cartProduct.filter((e) => e.data.id != id));
  };

  const handleUpdateCart = (updatedCartObject) => {
    console.log("handleUpdateCart", updatedCartObject);
    setCart(updatedCartObject);
   localStorage.setItem("my-cart", JSON.stringify(updatedCartObject));
  };
  const updateLocalCart = (id, quantity) => {
    setLocalCart({ ...localCart, [id]: +quantity });
    console.log("localCart", localCart);
  };
  const onhandleUpdateCart = () => {
    handleUpdateCart(localCart);
    setDisabled(true);
  };
  return (
    <div className="border-x border  border-gray-300">
      <div className="lg:flex items-center w-full p-4 hidden ">
        <span className="w-[25%]"></span>
        <h1 className="w-[35%] font-bold text-gray-600">Product</h1>
        <h1 className="w-[15%] font-bold text-gray-600">Price</h1>
        <h1 className="w-[15%] font-bold text-gray-600">Quantity</h1>
        <h1 className="w-[10%] font-bold text-gray-600">Subtotal</h1>
      </div>

      {cartProduct.length > 0 ? (
        <div>
          {cartProduct.map((e) => (
            <CartRow
              key={e.data.id}
              {...e.data}
              updateLocalCart={updateLocalCart}
              removeCartProduct={removeProduct}
              upadateCartHooks={cartHooks}
            />
          ))}
        </div>
      ) : (
        <EmptyCart />
      )}

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
            onButtonClick={onhandleUpdateCart}
            myClass={
              " tracking-wide w-full lg:px-16 lg:py-2  font-bold  disabled:opacity-60 disabled:hover:bg-gray-200 disabled:hover:text-gray-600 disabled:cursor-not-allowed"
            }
            disabled={disabled}
          >
            Update Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
