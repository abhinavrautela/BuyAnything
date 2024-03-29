import React, { useState, useEffect } from "react";
import Button from '../buttons/Button';
import { BsDash } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";
import { withCart } from "../ContextProvider/withProvider";

const ProductQuantity = ({ id, addToCart }) => {
  const [item, setItem] = useState(1);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (item <= 1) {
      setDisabled(true);
    } else setDisabled(false);
  }, [item]);
  useEffect(() => {
    setItem(1);
  }, [id]);
  const onAddToCart = () => {
    addToCart(id, item);
    setItem(1);
  };
  return (
    <div className="flex lg:flex-col xl:flex-row lg:items-start items-center gap-4 ">
      <div className="flex items-center gap-2">
        <button
          className="w-7 h-7 flex items-center cursor-pointer justify-center rounded-full bg-gray-200 hover:bg-primary disabled:opacity-50"
          onClick={() => setItem(item - 1)}
          disabled={disabled}
        >
          <BsDash size={20} />
        </button>
        <input
          type="number"
          value={item}
          className="bg-gray-100 w-9 text-center  border border-gray-200 "
        />
        <button
          className="w-7 h-7 flex items-center cursor-pointer  justify-center rounded-full bg-gray-200 hover:bg-primary"
          onClick={() => setItem(item + 1)}
        >
          <GrFormAdd size={20} />
        </button>
      </div>
      <div>
        <Button
          onButtonClick={onAddToCart}
          myClass={" w-full px-1  font-poppins"}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default withCart(ProductQuantity);