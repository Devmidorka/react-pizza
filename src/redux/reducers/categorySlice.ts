import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {categoryState} from "../../types/redux/Category";

const initialState:categoryState = {
    categories: [
        {
            id: 0,
            title: 'Все'
        },
        {
            id: 1,
            title: 'Мясные'
        },
        {
            id: 2,
            title: 'Вегетарианская'
        },
        {
            id: 3,
            title: 'Гриль'
        },
        {
            id: 4,

            title: 'Острые'
        },
        {
            id: 5,
            title: 'Закрытые'
        }
    ],
    active: 0

}

const categorySlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setActiveCategory(state, action: PayloadAction<number>){
            state.active = action.payload
        }
    }
})

export default categorySlice.reducer;

export const  {setActiveCategory}  = categorySlice.actions

