import React, {FC, useEffect} from 'react';

import List from "../components/List";
import Category from "../components/Category";
import {ICategory} from "../types/Category";
import Product from "../components/Product";
import {IProduct} from "../types/Product";
import Sort from "../components/Sort";
import NavBar from "../components/NavBar";
import ProductSkeleton from "../components/ProductSkeleton";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchProducts} from "../redux/asyncActions/Products";
import TextWithSmile from '../components/TextWithSmile';

const Catalog: FC = () => {

    const categories: ICategory[] = [
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
        },
    ]
    const {products, error, fetching} = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className='catalog'>
            <NavBar/>
            <div className='control_panel'>
                <div className='categories'>
                    <List
                        items={categories}
                        renderItem={(category: ICategory) => <Category key={category.id} title={category.title}/>}
                    />
                </div>
                <Sort/>
            </div>
            <p className='catalog-title'>Все пиццы</p>
            <div className="catalog-list">
                {error ?
                    <TextWithSmile text={'Упс!!! Произошла ошибка'}/>
                    :
                    fetching ?
                        [...new Array(6)].map(digit => <ProductSkeleton key={digit}/>)
                        :
                        <List
                            items={products}
                            renderItem={(product: IProduct) =>
                                <Product key={product.id} {...product}/>
                            }
                        />

                }

            </div>
        </div>
    );
};

export default Catalog;