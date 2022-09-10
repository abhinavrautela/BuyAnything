import React from 'react';

function Stars({productName}) {
    return (
    <>
       
    <div class="stars" >
         <input type="checkbox" id={productName + "five" } name="rate"/>
         <label className="cursor-pointer" htmlFor={productName + "five"}></label>
         <input type="checkbox" id={productName + "four"} name="rate"/>
         <label className="cursor-pointer" htmlFor={productName + "four"}></label>
         <input type="checkbox" id={productName + "three"} name="rate" />
         <label className="cursor-pointer" htmlFor={productName + "three"}></label>
         <input type="checkbox"  id={productName + "two"} name="rate"  />
         <label className="cursor-pointer" htmlFor={productName + "two"}></label>
         <input type="checkbox"  id={productName + "one"} name="rate" />
         <label className="cursor-pointer" htmlFor={productName+ "one"}></label>
    </div> 
           

    </>
  );
}

export default Stars;