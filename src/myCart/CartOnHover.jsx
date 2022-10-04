import React from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";

const CartOnHover = ({ thumbnail, title, price, quantity }) => {
  return (
    <div>
      <div className="bg-gray-50 w-80 h-90 p-3 space-y-3 border border-gray-200">
        <div className="flex items-center">
          <Link to="/">
            <img src={thumbnail} alt="/" className="w-20 " />
          </Link>
          <div className="grow">
            <Link to="/">
              <h1 className="font-poppins text-primary ">{title}</h1>
            </Link>
            <h2 className="font-thin">
              <span>{quantity} x </span>
              {price}
            </h2>
          </div>

          <button className="p-2 rounded-full border hover:border-primary">
            <ImCross size={11} />
          </button>
        </div>
        <div className="border-y border-gray-300 w-full">
          <h1 className="text-center py-3 font-semibold text-lg">
            Subtotal: <span className="font-thin">Calculating...</span>
          </h1>
        </div>
        <div className="space-y-2">
          <Button myClass="w-full font-bold py-2">View Cart</Button>
          <Button myClass="w-full font-bold py-2">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartOnHover;
