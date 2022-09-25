import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

const CartRow = ({ price, thumbnail, title, id, removeCartProduct, upadateCartHooks }) => {
  const { cart } = useContext(CartContext);
  let productQuantity = cart[id];
  const [quantity, setQuantity] = useState(productQuantity);
 
  const { getId, setQuantityHandler, setDisabled} = upadateCartHooks;
  const onCross = () => {
    removeCartProduct(id);
  };

  useEffect(() => {
    if (productQuantity === 0) {
      removeCartProduct(id);
    }
  }, [productQuantity]);

  useEffect(() => {
    setQuantityHandler(quantity);
    getId(id);
    if(quantity != productQuantity){
      setDisabled(false)
    }
  }, [quantity]);
  return (
    <div className="lg:border-t lg:border-gray-300">
      <div className="w-full flex flex-col lg:flex-row items-center lg:p-4 ">
        <div className="w-full flex justify-end border-t lg:border-0 border-gray-300 lg:justify-start lg:w-[10%] p-2 lg:p-0">
          <button
            className="p-2 rounded-full border border-gray-300 text-gray-300 hover:text-primary hover:border-primary"
            onClick={onCross}
          >
            <ImCross size={10} />
          </button>
        </div>
        <div className="w-full  lg:w-[15%] p-2 lg:p-0 border-t lg:border-0 border-gray-300">
          <Link to={"/product/" + id}>
            <img
              className="w-24 h-24 lg:h-16 mx-auto lg:m-0 lg:w-16"
              src={thumbnail}
              alt="/"
            />
          </Link>
        </div>
        <div className="w-full lg:w-[35%] flex justify-between lg:justify-start items-center p-2 lg:p-0 border-t lg:border-0 border-gray-300">
          <h1 className="w-[40%] lg:hidden font-bold text-gray-600">
            Product:
          </h1>
          <Link to={"/product/" + id}>
            <h1 className="font-poppins text-primary  w-full">{title}</h1>
          </Link>
        </div>
        <div className="w-full lg:w-[15%] flex justify-between lg:justify-start items-center p-2 lg:p-0 border-t lg:border-0 border-gray-300">
          <h1 className="w-[40%] lg:hidden font-bold text-gray-600">Price:</h1>
          <h1 className="font-bold text-gray-500  lg:w-[35%]">${price}</h1>
        </div>
        <div className="w-full lg:w-[15%] flex items-center p-2 lg:p-0 border-t lg:border-0 border-gray-300 justify-between">
          <h1 className="w-[40%] lg:hidden font-bold text-gray-600">
            Quantity:
          </h1>
          <input
            type="number"
            value={quantity}
            onChange={(event) => {
              if (quantity > 0) {
                setQuantity(event.target.value);
              } else {
                setQuantity(1);
              }
            }}
            className="p-1 border border-gray-500 outline-none text-center w-14 bg-transparent font-poppins text-gray-500"
          ></input>
        </div>
        <div className="w-full lg:w-[10%] flex justify-between lg:justify-start items-center p-2 lg:p-0 border-t lg:border-0 border-gray-300">
          <h1 className="w-[40%] lg:hidden font-bold text-gray-600">
            Subtotal:
          </h1>
          <h1 className="font-bold text-gray-500  lg:w-[10%]">
            ${price * productQuantity}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CartRow;
