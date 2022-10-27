import axios from "axios";
const BASE_URL = "https://myeasykart.codeyogi.io/"


export const getProductByIds = (ids) => {
return axios.get(BASE_URL + "products/bulk", {
    params : {
        ids : ids.join()
    }
}).then((response) => response.data)
} 

export const saveCart = (cart) => {
  console.log("cart", cart)
  return axios
    .post(
      BASE_URL + "carts",
      { data: cart },
      {
        headers: {
          Authorization: localStorage.getItem("MyToken"),
        },
      }
    )
    .then((response) => response.data);
}

export const getCart = () => {
  return axios
    .get(BASE_URL + "carts", {
      headers: {
        Authorization: localStorage.getItem("MyToken"),
      },
    })
    .then((response) =>  response.data)
}

let params = {};
export const getProducts = (search, sort, page, sortType) => {
    if(sort){
    params.sortBy = sort;
    } 
     if (sortType){
    params.sortType = sortType;
    }
     if (search){
    params.search = search;
    } 
     if (page){
    params.page = page;
    }
    const response = axios.get(BASE_URL + "products", {
     params
    })
    return response;
   }

export const getProductsDetail = (id) => {
    const response = axios.get(BASE_URL + "product/"+ id)
    return response;
   }