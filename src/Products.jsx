import React from 'react';
import { FiExternalLink } from "react-icons/fi"
import { Link } from "react-router-dom"
import Stars from "./Stars"

function Products({title,thumbnail, price, category, id}) {
  return (
      <div className="w-full">
        {/* <div className="absolute h-8 w-8 flex items-center justify-center bg-orange-600 rounded-full -m-2 ">
    <h1 className="font-bold text-xs text-gray-700">Sale!</h1>
    </div> */}
      <div className="space-y-1 ">
          
          <div className="overflow-hidden">
        <Link to={"product/"+ id}>
        <img className="h-48 sm:h-64 w-full object-cover border-2 sm:ease-in sm:duration-100 hover:scale-105 cursor-pointer" src={thumbnail} /></Link>
         </div>
        <h1 className="text-gray-400 text-xs font-mono">{category}</h1>
          <div>
        <h1 className="text-sm font-poppins taxt-gray-700 ">{title}</h1>
         <Stars productName={title}/>
            </div>
          <div className="flex justify-between items-center">
        <h3 className="font-poppins text-black text-xs">${price}</h3>
            <Link className="text-blue-500 flex items-center hover:text-blue-600 text-xs underline px-2" to={"product/"+ id}>View Details <span className="ml-1"><FiExternalLink /></span></Link>  
        </div>
      </div>
    </div>
  );
}

export default Products;