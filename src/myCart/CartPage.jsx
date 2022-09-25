import React, { useEffect, useState, useContext } from "react";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { getProductsDetail } from "../api";
import Loader from "../Loader";
import { CartContext } from "../App";

const CartPage = () => {
  const { cart } = useContext(CartContext);
  const [cartProduct, setCartProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bigPromise = Object.keys(cart).map((e) => getProductsDetail(e));
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
              cartProduct={cartProduct}
            />
          )}
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
