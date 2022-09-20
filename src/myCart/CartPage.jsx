import React, { useEffect, useState } from "react";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { getProductsDetail } from "../api";
import { Link } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import Loader from "../Loader";

const CartPage = ({ cartProductCount, setCart }) => {
  const [cartProduct, setCartProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bigPromise = Object.keys(cartProductCount).map((e) =>
      getProductsDetail(e)
    );
    Promise.all(bigPromise).then((response) => {
      setLoading(false);
      setCartProduct(response);
    });
  }, []);

  return (
    <div className="px-[10%] sm:px-[20%]">
      <div className="px-10 py-20 bg-white flex justify-end ">
        <div className="w-full">
          {loading ? (
            <Loader size={"xs"} />
          ) : (
            <CartList
              setCartProduct={setCartProduct}
              setCart={setCart}
              productTotalCount={cartProductCount}
              cartProduct={cartProduct}
            />
          )}
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
