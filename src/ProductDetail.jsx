import React, { useEffect, useState } from "react"
import Discription from  "./productDetailsComp/Description"



function ProductDetails({onClick}) {
   
    return (
    <div>
        <Discription  onClick={onClick}/>
    </div>
  );
}

export default ProductDetails;