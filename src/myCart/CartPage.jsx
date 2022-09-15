import React, { useEffect } from "react";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { Link } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";

const CartPage = ({cartProductCount}) => {
 

  return (
    <div className="px-[10%] sm:px-[20%]">
      <div className="px-10 py-20 bg-white flex justify-end ">
        <div className="w-full">
         <CartList  productTotalCount={cartProductCount}/>
          <CartTotal />
        </div>
        <div className="rounded-full  hover:bg-gray-200 absolute -mt-12 text-gray-400 hover:text-gray-700">
          <Link to="/">
            <RiHomeLine size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
