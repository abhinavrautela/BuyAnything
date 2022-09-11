import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
function Navbar({ totalItems }) {
  return (
    <div className="w-full bg-white flex justify-between items-center h-20 px-[10%] sm:px-[20%] py-2 mb-10 shadow shadow-gray-100 ">
      <img
        src="https://s3-ap-southeast-1.amazonaws.com/p2swebsite/images/smeKhabar/news/amazon_1618225124036_113.jpg"
        className="h-12 w-24"
      />

      <span class="hidden  before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative lg:inline-block mx-3">
        <span class="relative text-white font-bold tracking-tighter sm:tracking-widest">
          "You&#39;ll find it here! "
        </span>
      </span>
      <Link to="/cart">
        <div className="flex justify-end ">
          <FiShoppingCart size={30} />
          <div className="absolute">
            <h4 className="text-xs w-5 h-5 flex items-center justify-center font-bold text-white  rounded-full bg-primary -m-2 hover:ring-2 hover:ring-primary hover:bg-white hover:text-primary cursor-pointer">
              {totalItems}
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
