import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import { useMemo } from "react";


function Navbar({ totalItems }) {
  const [navbar, toggalNavbar] = useState(false);
  useMemo(()=> {
    setTimeout(() => {
      toggalNavbar(false);
    }, 7000);
  }, [navbar]) 
  
 return (
   <div className="w-full bg-white flex justify-between items-center h-20 px-[10%] sm:px-[20%] py-2 mb-10 shadow shadow-gray-100 ">
     <img
       src="https://s3-ap-southeast-1.amazonaws.com/p2swebsite/images/smeKhabar/news/amazon_1618225124036_113.jpg"
       className="h-12 w-24"
     />
     <div className="hidden lg:flex items-center space-x-3 ">
       <div className="space-x-5 font-thin  flex ">
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
         <Link to="/loginpage">
           <h1 className="hover:text-primary ease-in-out duration-300 hover:underline hover:scale-105 ">
             LogIN
           </h1>
         </Link>
         <Link to="/signuppage">
           <h1 className="hover:text-primary ease-in-out duration-300 hover:underline hover:scale-105 ">
             SignUp
           </h1>
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
           <Link to="/" className="hover:text-primary ">
             Home
           </Link>
           <Link to="/aboutus">AboutUS</Link>
           <Link to="/loginpage">LogIN</Link>
           <Link to="/signuppage">SignUp</Link>
         </div>
       </div>
     </div>
   </div>
 );
}

export default Navbar;
