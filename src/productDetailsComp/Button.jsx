import React, { useState, useEffect } from 'react';
import { BsDash } from "react-icons/bs"
import { GrFormAdd } from "react-icons/gr"
function Button({children, handleChange, id}) {
    const[item, setItem] =  useState(1);
    const [disabled, setDisabled] = useState(false)
    useEffect(() => {
        if(item<=1){
            setDisabled(true)
        }else(
            setDisabled(false)
        )
    }, [item])
     useEffect(()=>{
         setItem(1)
     }, [id])
    const onAddToCart = () =>{
        handleChange(id, item)
        setItem(1)
    }
    
    
    return (
     <div className="flex flex-row items-center gap-4 ">
      <div className="flex items-center gap-2">
         <button  className="w-7 h-7 flex items-center cursor-pointer justify-center rounded-full bg-gray-200 hover:bg-primary disabled:opacity-50" onClick={()=> setItem(item - 1)}   disabled={disabled}><BsDash size={20}/></button>
          <input type="number"  value={item} className="bg-gray-100 w-9 text-center  border border-gray-200 "/>
          <button  className="w-7 h-7 flex items-center cursor-pointer justify-center rounded-full bg-gray-200 hover:bg-primary" onClick={() => setItem(item + 1)} ><GrFormAdd size={20}/></button>
      </div>
    <button className=" font-poppins px-5 sm:px-7 py-1 bg-primary rounded-lg text-white uppercase text-sm sm:text-base tracking-tighter" onClick={onAddToCart}>{children}</button>
    </div>
 
  );
}

export default Button;