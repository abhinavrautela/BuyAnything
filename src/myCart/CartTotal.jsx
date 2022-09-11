import React from 'react'
import Button from '../buttons/Button';

const CartTotal = () => {
  return (
    <div className='flex justify-end'>
      <div className="border border-gray-300  mt-3 w-full lg:w-[49%]">
        <div className="border-b border-gray-300 p-3 bg-gray-100">
          <h1 className="text-bold text-gray-600 text-lg font-bold">
            Cart Totals
          </h1>
        </div>
        <div className="w-full p-5 space-y-4">
          <div>
            <div className="p-2 border-b flex items-center border-gray-300 ">
              <h1 className="font-bold text-gray-600 w-[40%]">Subtotal</h1>
              <h3 className="font-bold text-gray-600">$102</h3>
            </div>
            <div className="p-2 border-b flex items-center border-gray-300 ">
              <h1 className="font-bold text-gray-600 w-[40%]">Total</h1>
              <h3 className="font-bold text-gray-600">$q034</h3>
            </div>
          </div>
          <div>
            <Button myClass={" w-full py-3 font-bold text-xs lg:text-base"}>
              Proceed To Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTotal