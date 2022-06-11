import React, {FC, useEffect, useState} from 'react';

import List from "../components/List";
import Category from "../components/Category";
import {ICategory} from "../types/Category";
import Product from "../components/Product";
import {IProduct} from "../types/Product";
import Sort from "../components/Sort";
import NavBar from "../components/NavBar";
import ProductSkeleton from "../components/ProductSkeleton";

const Catalog:FC = () => {

    const categories: ICategory[] = [
        {
            id:0,
            title: 'Все'
        },
        {
            id:1,
            title: 'Мясные'
        },
        {
            id:2,
            title: 'Вегетарианская'
        },
        {
            id:3,
            title: 'Гриль'
        },
        {
            id:4,

            title: 'Острые'
        },
        {
            id: 5,
            title: 'Закрытые'
        },
    ]

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://629a62d46f8c03a978557b33.mockapi.io/api/products').then(response => {
            return response.json();
        }).then(data => {
            setProducts(data)
        })
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
                {products.length > 0 ?
                    <List
                        items={products}
                        renderItem={(product:IProduct) =>
                            <Product key={product.id} {...product}/>
                        }
                    />
                    :
                    [...new Array(6)].map(digit =>  <ProductSkeleton key={digit}/>)
                }
            </div>
        </div>
    );
};

export default Catalog;