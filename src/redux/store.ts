import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice";
import sortSlice from "./reducers/sortSlice";
import categorySlice from "./reducers/categorySlice";

const rootReducer = combineReducers({
    productReducer,
    sortSlice,
    categorySlice
})

export const store = configureStore({
    reducer: rootReducer
})
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch