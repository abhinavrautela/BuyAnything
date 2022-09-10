import React, {useEffect, useState} from 'react';
import Button from "./Button";
import Loader from "../Loader";
import { useParams } from "react-router-dom"
import { getProductsItem } from "../api.js"
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from "react-router-dom";
import Pic from "./Pic";
function Description({onClick}) {
     const [productDetail, setProductDetail] = useState({});
      const pageId = +(useParams().id)
    const {title, price, thumbnail, description, category} = productDetail;
    useEffect(()=> {
        const myResponses = getProductsItem(pageId);
        myResponses.then((myResponses)=>setProductDetail(myResponses.data))
        
    },[pageId])

    
 return (
         <div>
    <div className="flex flex-col sm:flex-row items-center px-4 py-2 bg-white gap-2 w-[70%] mx-auto  relative">
        { title ? <><Pic img={thumbnail}/>
    <div className="space-y-2 sm:space-y-4 p-4 w-full">
    <h1 className="text-2xl sm:text-4xl font-poppins text-gray-700">{title}</h1>
        <div className="sm:space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-gray-600">${price}</h2>
            <p className="text-gray-600 font-poppins">
                {description}
           </p>
            </div>
        <div>
        <Button handleChange={onClick} id={pageId}>Add To Cart</Button>
      </div >
        <div className="font-poppins py-2 border-t-2 opacity-85 text-sm">
            Category:<span className="text-primary capitalize"> {category}</span>
        </div>
        </div>
         <div className="w-full sm:w-auto flex justify-between">
             {pageId <= 1 ? <div></div> : <Link className="text-blue-500 flex items-center hover:text-blue-600 text-xs underline px-2" to={"/product/"+(pageId-1)}>Previous</Link> }
             {pageId >=60 ? <div></div> : <Link className="text-blue-500 flex items-center hover:text-blue-600 text-xs underline px-2" to={"/product/"+(pageId+1)}>Next</Link>}
             </div>
     </> : <Loader size="small"/>}
    <Link to="/"><div className="rounded-full border-2  border-gray-300 inline-block hover:bg-gray-200 absolute -top-8 -right-16 sm:top-3 sm:right-3 "> < IoIosArrowRoundBack size={40} /> </div> </Link> 
       </div>
             </div> 
  );
}

export default Description;