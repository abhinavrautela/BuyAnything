import React, { useMemo, useState } from "react";
import ProductQuantity from "./ProductQuantity";
import Loader from "../Loader";
import { useParams } from "react-router-dom";
import { getProductsDetail } from "../api.js";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Pic from "./Pic";


function Description({ onClick }) {
  const [loader, setLoader] = useState(true);
  const [productDetail, setProductDetail] = useState({});
  const pageId = +useParams().id;
  const { title, price, thumbnail, description, category } = productDetail;
  useMemo(() => {
    const myResponses = getProductsDetail(pageId);
    myResponses.then((myResponses) => {
      setProductDetail(myResponses.data);
      setLoader(false);
    }).catch(setLoader(true))
  }, [pageId]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center px-4 py-2 bg-white gap-2 w-[70%] mx-auto  relative">
        {loader ? (
          <Loader size="small" />
        ) : (
          <>
            <Pic img={thumbnail} />
            <div className="space-y-2 lg:space-y-4 p-4 w-full">
              <h1 className="text-2xl lg:text-4xl font-poppins text-gray-700">
                {title}
              </h1>
              <div className="lg:space-y-2">
                <h2 className="text-lg lg:text-xl font-bold text-gray-600">
                  ${price}
                </h2>
                <p className="text-gray-600 font-poppins">{description}</p>
              </div>
              <div>
                <ProductQuantity handleChange={onClick} id={pageId} />
              </div>
              <div className="font-poppins py-2 border-t-2 opacity-85 text-lg">
                Category:
                <span className="text-primary capitalize"> {category}</span>
              </div>
            </div>
            <div className="w-full lg:w-auto flex justify-between">
              {pageId <= 1 ? (
                <div></div>
              ) : (
                <Link
                  className="text-blue-500 flex items-center hover:text-blue-600 text-xs underline px-2"
                  to={"/product/" + (pageId - 1)}
                >
                  Previous
                </Link>
              )}
              {pageId >= 60 ? (
                <div></div>
              ) : (
                <Link
                  className="text-blue-500 flex items-center hover:text-blue-600 text-xs underline px-2"
                  to={"/product/" + (pageId + 1)}
                >
                  Next
                </Link>
              )}
            </div>
          </>
        )}
        <Link to="/">
          <div className="rounded-full border-2  border-gray-300 inline-block hover:bg-gray-200 absolute -top-8 -right-16 lg:top-3 lg:right-3 ">
            <IoIosArrowRoundBack size={40} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Description;
