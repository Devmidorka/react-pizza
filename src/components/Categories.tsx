import React, {useEffect} from 'react';
import List from "./List";
import {ICategory} from "../types/Category";
import Category from "./Category";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {setActiveCategory} from "../redux/reducers/categorySlice";
import {fetchProducts} from "../redux/asyncActions/Products";

const Categories = () => {
    const categories: ICategory[] = useAppSelector(state => state.categorySlice.categories)
    const active: number = useAppSelector(state => state.categorySlice.active)
    const sortBy:string = useAppSelector(state => {
        return state.sortSlice.sortArray[state.sortSlice.active].name
    })
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts(sortBy, active))
    }, [active])

    return (
        <div className='categories'>
            <List
                items={categories}
                renderItem={(category: ICategory) =>
                    <Category
                        className={category.id == active ? 'active': ''}
                        onClick={() => dispatch(setActiveCategory(category.id))}
                        key={category.id}
                        title={category.title}
                    />}
            />
        </div>
    );
};

export default Categories;