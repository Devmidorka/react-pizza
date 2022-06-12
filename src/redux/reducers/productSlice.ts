import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {productState} from "../../types/redux/Product";
import {IProduct} from "../../types/Product";


const initialState:productState = {
    products: [],
    fetching: false,
    error: null
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        productsFetching(state){
            state.fetching = true
        },
        productsFetchingSuccess(state, action: PayloadAction<IProduct[]>){
            state.fetching = false
            state.error = null
            state.products = action.payload
        },
        productsFetchingError(state, action: PayloadAction<string>){
            state.fetching = false
            state.error = action.payload
        }
    }

})

export const {productsFetching, productsFetchingError, productsFetchingSuccess} = todoSlice.actions

export default todoSlice.reducer