import React, {FC, useEffect} from 'react';

import List from "../components/List";
import Product from "../components/Product";
import {IProduct} from "../types/Product";
import Sort from "../components/Sort";
import NavBar from "../components/NavBar";
import ProductSkeleton from "../components/ProductSkeleton";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchProducts} from "../redux/asyncActions/Products";
import TextWithSmile from '../components/TextWithSmile';
import Categories from "../components/Categories";

const Catalog: FC = () => {

    const {products, error, fetching} = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className='catalog'>
            <NavBar/>
            <div className='control_panel'>
                <Categories/>
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