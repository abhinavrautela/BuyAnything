import React from 'react'
import CartList from './CartList';
import CartTotal from './CartTotal';
const CartPage = () => {
  return (
    <div className="px-[10%] sm:px-[20%]">
      <div className="px-10 py-20 bg-white">
        <CartList />
        <CartTotal />
      </div>
    </div>
  );
}

export default CartPage