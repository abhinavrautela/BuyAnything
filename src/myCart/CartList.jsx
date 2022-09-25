import React, { useContext, useState } from "react";
import CartRow from "./CartRow";
import Button from "../buttons/Button";
import EmptyCart from "./EmptyCart";
import { CartContext } from "../App";

const CartList = ({ cartProduct, setCartProduct }) => {
  const [quantityHandler, setQuantityHandler] = useState(0);
  const [id, getId] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const xyz = { getId, setQuantityHandler, setDisabled };
  const { setCart } = useContext(CartContext);
  const removeProduct = (id) => {
    const mylocalStorage = JSON.parse(localStorage.getItem("my-cart"));
    const { [id]: deletedItem, ...rest } = mylocalStorage;
    setCart(rest);
    localStorage.setItem("my-cart", JSON.stringify(rest));
    setCartProduct(cartProduct.filter((e) => e.data.id != id));
  };

  const handleUpdateCart = (id, newQuantity) => {
    let mylocalStorage = JSON.parse(localStorage.getItem("my-cart"));
    mylocalStorage = { ...mylocalStorage, [id]: +newQuantity };
    setCart(mylocalStorage);
    console.log("mylocalStorage", mylocalStorage);
    localStorage.setItem("my-cart", JSON.stringify(mylocalStorage));
  };
  const onhandleUpdateCart = () => {
    handleUpdateCart(id, quantityHandler);
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

      <div>
        {cartProduct.length > 0 ? (
          <div>
            {cartProduct.map((e) => (
              <CartRow
                {...e.data}
                removeCartProduct={removeProduct}
                xyz={xyz}
              />
            ))}
          </div>
        ) : (
          <EmptyCart />
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
            onButtonClick={onhandleUpdateCart}
            myClass={
              " tracking-wide w-full lg:px-16 lg:py-2  font-bold  disabled:opacity-60 disabled:hover:bg-gray-200 disabled:hover:text-gray-600 "
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
