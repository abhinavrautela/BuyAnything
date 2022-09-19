import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
function Navbar({ totalItems }) {
  return (
    <div className="w-full bg-white flex justify-between items-center h-20 px-[10%] sm:px-[20%] py-2 mb-10 shadow shadow-gray-100 ">
      <img
        src="https://s3-ap-southeast-1.amazonaws.com/p2swebsite/images/smeKhabar/news/amazon_1618225124036_113.jpg"
        className="h-12 w-24"
      />
      <div className="hidden lg:flex items-center space-x-2 ">
        <div className="space-x-2 font-thin">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <Link to="/aboutus" className="hover:text-primary">
            AboutUS
          </Link>
          <Link to="/loginpage" className="hover:text-primary">
            LogIN
          </Link>
          <Link to="/signuppage" className="hover:text-primary">
            SignUp
          </Link>
        </div>
        <Link to="/cart">
          <div className="flex justify-end ">
            <FiShoppingCart size={20} />
            <div className="absolute">
              <h4 className="text-xs w-4 h-4 flex items-center justify-center font-bold text-white  rounded-full bg-primary -m-2 hover:ring-2 hover:ring-primary hover:bg-white hover:text-primary cursor-pointer">
                {totalItems}
              </h4>
            </div>
          </div>
        </Link>
      </div>
      <div className=" lg:hidden"><CgMenuRight /></div>
    </div>
  );
}

export default Navbar;
