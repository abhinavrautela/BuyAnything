import React, { useState, useMemo } from "react";
import ProductNotFound from "./ProductNotFound";
import Products from "./Products";
import PageButton from "./buttons/PageButton";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Loader from "./Loader";
import { getProducts } from "./api.js";
function FrontPage() {
  const [product, setProduct] = useState([]);
  const [query, setQuery] = useState("");
  const [sortValue, setSortValue] = useState("default");
  const [mySkip, setMySkip] = useState(0);
  useMemo(() => {
    const productData = getProducts(mySkip);
    productData.then((response) => setProduct(response.data.products));
  }, [mySkip]);

  let data = product;

  data = useMemo(
    () =>
      data.filter(
        (e) => e.title.toLowerCase().indexOf(query.toLowerCase()) != -1
      ),
    [query, product]
  );

  useMemo(
    () => {
    if (sortValue == "title") {
      data.sort((x, y) => (x.title < y.title ? -1 : 1));
    }
    if (sortValue == "low_price") {
      data.sort((x, y) => x.price - y.price);
    }
    if (sortValue == "high_price") {
      data.sort((x, y) => y.price - x.price);
    }
  }, [sortValue]);

  return (
    <div className="px-[10%] sm:px-[20%] ">
      <div className="bg-white shadow shadow-gray-50 px-12 py-20 w-full h-full space-y-8 ">
        <div className="flex justify-between">
          <div className="lg:flex lg:items-center border px-3 py-1 rounded-md border-gray-300 hover:border-gray-500 hidden ">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="border-transparent outline-none  p-2"
              placeholder="Find ?"
            />
            <AiOutlineSearch size={25} color="gray" />
          </div>
          <select
            value={sortValue}
            onChange={(event) => setSortValue(event.target.value)}
            className="font-mono text-gray-500 rounded-md sm:border-0 cursor-pointer text-center sm:text-left px-1 sm:px-3 ring-1 ring-gray-300 focus:ring-gray-500 py-2 sm:py-0"
          >
            <option value="default">Sort Default</option>
            <option value="title">Sort By Title</option>
            <option value="low_price">PRICE: Low tO High</option>
            <option value="high_price">PRICE: High tO Low</option>
          </select>
        </div>
        {product.length ? (
          <div className="space-y-28">
            <div className="h-full grid grid-cols-1 sm:grid-cols-3 grid-flow-rows gap-10">
              {data.length > 0 ? (
                data.map((e) => <Products {...e} />)
              ) : (
                <ProductNotFound />
              )}
            </div>
            <div className="flex gap-2 items-center">
              <PageButton onClick={() => setMySkip(0)}>1</PageButton>
              <PageButton onClick={() => setMySkip(30)}>2</PageButton>
              <PageButton>
                <HiOutlineArrowNarrowRight size={15} />
              </PageButton>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default FrontPage;
