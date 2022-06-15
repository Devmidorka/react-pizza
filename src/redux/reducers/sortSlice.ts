import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {sortState} from "../../types/redux/Sort";

const initialState: sortState = {
    sortArray: [
        {
            id: 0,
            title: 'популярности',
            name: 'rating'
        },
        {
            id: 1,
            title: 'цене',
            name: 'price'
        },
        {
            id: 2,
            title: 'названию',
            name: 'title'
        }
    ],
    active: 0
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers:{
        setActive(state, action: PayloadAction<number>){
            state.active = action.payload
        }
    }
})

export default sortSlice.reducer
export const {setActive} = sortSlice.actions