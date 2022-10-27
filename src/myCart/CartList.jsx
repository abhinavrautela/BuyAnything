import React, { useEffect, useState } from "react";
import CartRow from "./CartRow";
import Button from "../buttons/Button";
import EmptyCart from "./EmptyCart";
import { withCart } from "../ContextProvider/withProvider";

const CartList = ({ cart, updateCart }) => {
  const [disabled, setDisabled] = useState(true);
  const [quantityMap, setQuantityMap] = useState();
  const cartHooks = { setDisabled };

  useEffect(() => setQuantityMap(cartToQuantityMap()), [cart]);

  const cartToQuantityMap = () =>
    cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );

  const removeProduct = (id) => {
    const newQuantityMap = cartToQuantityMap();
    delete newQuantityMap[id];
    updateCart(newQuantityMap);
  };
  const handleUpdateCart = (updatedCartObject) => {
    updateCart(updatedCartObject);
  };
  const updatequantityMap = (id, quantity) => {
    setQuantityMap({ ...quantityMap, [id]: +quantity });
  };
  const onhandleUpdateCart = () => {
    handleUpdateCart(quantityMap);
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

      {cart.length > 0 ? (
        <div>
          {cart.map((e) => (
            <CartRow
              key={e.product.id}
              {...e.product}
              updatequantityMap={updatequantityMap}
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

export default withCart(CartList);
