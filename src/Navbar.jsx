import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { useMemo } from "react";
import { NevbarCountContext } from "./App";
import { UserDetailContext } from "./App";
import CartOnHover from "./myCart/CartOnHover";
import Button from "./buttons/Button";

function Navbar() {
  const { user, setUser } = useContext(UserDetailContext);
  const totalItems = useContext(NevbarCountContext);
  const [navbar, toggalNavbar] = useState(false);
  const [cartOnHover, setCartOnHover] = useState(false);
  useMemo(() => {
    setTimeout(() => {
      toggalNavbar(false);
    }, 7000);
  }, [navbar]);

  return (
    <div className="w-full bg-white flex justify-between items-center h-20 px-[10%] sm:px-[20%] py-2 mb-10 shadow shadow-gray-100 ">
      <img
        src="https://s3-ap-southeast-1.amazonaws.com/p2swebsite/images/smeKhabar/news/amazon_1618225124036_113.jpg"
        className="h-12 w-24"
      />

      <div className="hidden lg:flex items-center space-x-3 ">
        <div className="space-x-5 font-thin flex items-center">
          <Link to="/">
            <h1 className="hover:text-primary ease-in-out duration-300 hover:underline hover:scale-105 ">
              Home
            </h1>
          </Link>
          <Link to="/aboutus">
            <h1 className="hover:text-primary ease-in-out duration-300 hover:underline hover:scale-105 ">
              AboutUS
            </h1>
          </Link>
          <Button
            onButtonClick={() => {
              setUser(undefined);
              localStorage.removeItem("MyToken");
            }}
            myClass="lg:text-xs hover:underline opacity-50 hover:opacity-80"
          >
            LogOUT
          </Button>
          <h1 className="capitalize font-poppins  bg-purple-100 rounded-lg p-1 text-purple-900 flex items-center opacity-50 hover:opacity-100 cursor-not-allowed">
            <MdAccountCircle size={16} />
            <span className="font-bold text-purple-500 text-xs underline ml-1">
              {user.full_name}
            </span>
          </h1>
        </div>
        <Link to="/cart">
          <div
            className="flex justify-end "
            onMouseEnter={() => setCartOnHover(true)}
          >
            <FiShoppingCart size={20} />
            <div className="absolute">
              <h4 className="text-xs w-4 h-4 flex items-center justify-center font-bold text-white  rounded-full bg-primary -m-2 hover:ring-2 hover:ring-primary hover:bg-white hover:text-primary cursor-pointer">
                {totalItems}
              </h4>
            </div>
            {/* <div
              className={
                cartOnHover
                  ? "absolute mt-9  duration-400  shadow-lg z-10"
                  : "w-1 h-1 p-0 -m-1 overflow-hidden ease-out duration-300"
              }
              onMouseEnter={() => setCartOnHover(true)}
              onMouseLeave={() => setCartOnHover(false)}
            >
              <CartOnHover />
            </div> */}
          </div>
        </Link>
      </div>
      <div className="lg:hidden flex items-center space-x-3">
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
        <div className=" flex flex-col  items-end">
          <div className="relative mt-2">
            <button
              className="outline-none "
              onClick={() => toggalNavbar(!navbar)}
            >
              <CgMenuRight size={26} />
            </button>
          </div>

          <div
            className={
              navbar
                ? "flex flex-col items-center text-gray-700 bg-gray-300 text-xs font-poppins absolute mt-9 duration-200 space-y-2 rounded-md py-3 px-4 shadow-lg z-10"
                : "w-1 h-1 p-0 -m-1 overflow-hidden ease-out duration-300 absolute"
            }
          >
            <h1 className="capitalize font-poppins  flex items-center cursor-not-allowed">
              <MdAccountCircle size={10} />
              <span className="font-bold text-purple-500 text-xs underline ml-1 tracking-tighter">
                {user.full_name}
              </span>
            </h1>
            <Link to="/" className="hover:text-primary ">
              Home
            </Link>
            <Link to="/aboutus">AboutUS</Link>
            <button
              onClick={() => {
                setUser(undefined);
                localStorage.removeItem("MyToken");
              }}
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
