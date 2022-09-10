import axios from "axios";
const BASE_URL = "https://dummyjson.com/"

export const getProducts = (skip) => {
 const response = axios.get(BASE_URL+`products?skip=${skip}`)
    return response;
   }

export const getProductsItem = (id) => {
    const response = axios.get(BASE_URL+"products/"+id)
    return response;
}