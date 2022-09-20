import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";


function Navbar({ totalItems }) {
  const [navbar, toggalNavbar] = useState(false);

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
      <div className=" lg:hidden flex flex-col  items-end">
        <div className="relative">
          <button
            className="outline-none"
            onClick={() => toggalNavbar(!navbar)}
          >
            <CgMenuRight size={26} />
          </button>
        </div>

        <div
          className = {
            navbar
              ? "flex flex-col items-center bg-gray-300 text-xs font-poppins absolute mt-6 duration-200 space-y-1 rounded-md py-3 px-4 shadow-lg"
              : "right-[-100%] top-0 ease-out duration-300 absolute"
          }
        >
          <Link to="/" className="hover:text-primary ">
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
      </div>
    </div>
  );
}

export default Navbar;
