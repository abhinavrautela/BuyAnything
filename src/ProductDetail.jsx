import React from "react";
import Discription from "./productDetailsComp/Description";

function ProductDetails({ onClick }) {
  return (
    <div>
      <Discription onClick={onClick} />
    </div>
  );
}

export default ProductDetails;
