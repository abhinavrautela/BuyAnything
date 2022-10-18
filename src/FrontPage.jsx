import React, { useState, useEffect } from "react";
import ProductNotFound from "./ProductNotFound";
import Products from "./Products";
import PageButton from "./buttons/PageButton";
import { AiOutlineSearch } from "react-icons/ai";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import { range } from "lodash";
import Loader from "./Loader";
import Alert from "./ContextProvider/Alert";
import { getProducts } from "./api";
import { withAlert } from "./ContextProvider/withProvider";
import { Link, useSearchParams } from "react-router-dom";
const  FrontPage = ({ alert }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [ paging, setPaging ] = useState({range: 1, pages: 1})
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  let page = +searchParams.get("page");
  const query = searchParams.get("query") || "";
  const sortBy = searchParams.get("sort") || "default";
 
  page = page || 1;
  useEffect(() => {
    let sortType;
    let mySort;
    if (sortBy == "title") {
      mySort = "title";
    } else if (sortBy == "LowToHigh") {
      mySort = "price";
      sortType;
    } else if (sortBy == "HighToLow") {
      mySort = "price";
      sortType = "desc";
    }
    getProducts(query, mySort, page, sortType).then((response) => {
      setProduct(response.data);
      setLoading(false);
    });
  }, [query, sortBy, page]);



  return (
    <div className="px-[10%] sm:px-[20%] ">
      <div className="bg-white shadow shadow-gray-50 px-12 py-20 lg:pt-0 lg:pb-11 w-full h-full space-y-8">
        <div className="flex justify-end">
          {alert ? <Alert /> : <div className="h-8"></div>}
        </div>

        <div className="flex justify-between w-full">
          <div className="lg:flex lg:items-center border px-3 py-1 rounded-md border-gray-300 hover:border-gray-500 hidden ">
            <input
              value={query}
              onChange={(event) =>
                setSearchParams(
                  { ...params, query: event.target.value },
                  { replace: false }
                )
              }
              className="border-transparent outline-none  p-2"
              placeholder="Find ?"
            />
            <AiOutlineSearch size={25} color="gray" />
          </div>
          <select
            value={sortBy}
            onChange={(event) =>
              setSearchParams(
                { ...params, sort: event.target.value },
                { replace: false }
              )
            }
            className="font-mono text-gray-500 rounded-md sm:border-0 cursor-pointer text-center sm:text-left px-1 sm:px-3 ring-1 ring-gray-300 focus:ring-gray-500 py-2 sm:py-0"
          >
            <option value="default">Sort Default</option>
            <option value="title">Sort By Title</option>
            <option value="LowToHigh">PRICE: Low tO High</option>
            <option value="HighToLow">PRICE: High tO Low</option>
          </select>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="space-y-28">
            <div className="h-full grid grid-cols-1 sm:grid-cols-3 grid-flow-rows gap-10">
              {product.data.length ? (
                product.data.map((e) => <Products {...e} key={e.id} />)
              ) : (
                <ProductNotFound />
              )}
            </div>
            <div className="flex gap-2 items-center">
              {paging.range > 3 && (
                <PageButton onClick={() => setPaging({ range: 1, pages: 1 })}>
                  <HiOutlineArrowNarrowLeft size={15} />
                </PageButton>
              )}
              {range(paging.range, product.meta.last_page - paging.pages).map(
                (pageNo) => (
                  <Link
                    
                    to={`?${new URLSearchParams({ ...params, page: pageNo })}`}
                    className={
                      "font-poppins text-xs py-3 px-4 border border-primary hover:text-white hover:bg-primary flex items-center " +
                      (page === pageNo
                        ? "bg-primary text-white"
                        : "bg-transparent text-primary")
                    }
                  >
                    {pageNo}
                  </Link>
                )
              )}
              {paging.range <= 3 && (
                <PageButton onClick={() => setPaging({ range: 4, pages: -1 })}>
                  <HiOutlineArrowNarrowRight size={15} />
                </PageButton>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default withAlert(FrontPage);
