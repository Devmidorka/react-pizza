import {AppDispatch} from "../store";
import axios from "axios";
import {productsFetching, productsFetchingError, productsFetchingSuccess} from "../reducers/productSlice";
import {IProduct} from "../../types/Product";


export const fetchProducts = (sortBy?:string, category: number = 0) => async(dispatch:AppDispatch) => {
    try{
        dispatch(productsFetching())
        const response = await axios.get<IProduct[]>(
            `https://629a62d46f8c03a978557b33.mockapi.io/api/products?sortBy=${sortBy}`+
            `&${category ? `category=${category}` : ''}`
        )
        dispatch(productsFetchingSuccess(response.data))
    }catch (error){
        dispatch(productsFetchingError(error.message))
    }
}