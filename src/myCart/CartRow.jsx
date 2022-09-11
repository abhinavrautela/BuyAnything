import React from "react";
import { ImCross } from "react-icons/im";

const CartRow = ({ price, thumbnail, title}) => {
  return (
    <div className="lg:border-t lg:border-gray-300">
      <div className="w-full flex flex-col lg:flex-row items-center lg:p-4 ">
        <div className="w-full flex justify-end border-t lg:border-0 border-gray-300 lg:justify-start lg:w-[10%] p-2 lg:p-0">
          <button className="p-2 rounded-full border border-gray-300 text-gray-300 hover:text-primary hover:border-primary">
            <ImCross size={10} />
          </button>
        </div>
        <div className="hidden lg:block w-[15%] p-2 lg:p-0 border-t lg:border-0 border-gray-300">
          <img className="w-16" src={thumbnail} alt="/" />
        </div>
        <div className="w-full lg:w-[35%] flex items-center p-2 lg:p-0 border-t lg:border-0 border-gray-300">
          <h1 className="w-[40%] lg:hidden font-bold text-gray-600">
            Product:
          </h1>
          <h1 className="font-poppins text-primary text-right w-full lg:w-[35%] lg:text-left">
            {title}
          </h1>
        </div>
        <div className="w-full lg:w-[15%] flex items-center p-2 lg:p-0 border-t lg:border-0 border-gray-300">
          <h1 className="w-[40%] lg:hidden font-bold text-gray-600">Price:</h1>
          <h1 className="font-bold text-gray-500 text-right w-full lg:w-[35%] lg:text-left">
            ${price}
          </h1>
        </div>
        <div className="w-full lg:w-[15%] flex items-center p-2 lg:p-0 border-t lg:border-0 border-gray-300 justify-between">
          <h1 className="w-[40%] lg:hidden font-bold text-gray-600">
            Quantity:
          </h1>
          <input
            type="number"
            value="1"
            className="p-1 border border-gray-500 outline-none text-center w-14 bg-transparent font-poppins text-gray-500"
          ></input>
        </div>
        <div className="w-full lg:w-[10%] flex items-center p-2 lg:p-0 border-t lg:border-0 border-gray-300">
          <h1 className="w-[40%] lg:hidden font-bold text-gray-600">
            Subtotal:
          </h1>
          <h1 className="font-bold text-gray-500 text-right w-full lg:w-[10%] lg:text-left">
            ${price}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CartRow;
