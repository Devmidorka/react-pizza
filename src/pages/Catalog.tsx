import React, {FC} from 'react';

import List from "../components/List";
import Category from "../components/Category";
import {ICategory} from "../types/Category";
import Product from "../components/Product";
import {ProductProps} from "../types/Product";
import Sort from "../components/Sort";
import NavBar from "../components/NavBar";

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

    const products: ProductProps[] = [
        {
            id:0,
            img: 'chisburger-pizza.png',
            title: 'Чизбургер-пицца',
            price: 395,
            count: 2,
            filters:{
                thin: true,
                small:true
            }
        },
        {
            id:1,
            img: 'cheese-pizza.png',
            title: 'Сырная',
            price: 450,
            filters:{
                thin: true,
                small: true,
            }
        },
        {
            id:2,
            img: 'shrimps-pizza.png',
            title: 'Креветки по-азиатски',
            price: 290,
            filters:{
                thin: true,
                medium: true,
            }
        },
        {
            id:3,
            img: 'chick-pizza.png',
            title: 'Сырный цыпленок',
            price: 385,
            filters:{
                thin: true,
                small: true,
            }
        },
        {
            id:4,
            img: 'chisburger-pizza.png',
            title: 'Чизбургер-пицца',
            price: 395,
            count: 2,
            filters:{
                thin: true,
                small:true
            }
        },
        {
            id:5,
            img: 'cheese-pizza.png',
            title: 'Сырная',
            price: 450,
            filters:{
                thin: true,
                small: true,
            }
        },
        {
            id:6,
            img: 'shrimps-pizza.png',
            title: 'Креветки по-азиатски',
            price: 290,
            filters:{
                thin: true,
                medium: true,
            }
        },
        {
            id:7,
            img: 'chick-pizza.png',
            title: 'Сырный цыпленок',
            price: 385,
            filters:{
                thin: true,
                small: true,
            }
        }
    ]

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
                <List
                    items={products}
                    renderItem={(product:ProductProps) =>
                        <Product key={product.id} {...product}/>
                    }
                />
            </div>

        </div>
    );
};

export default Catalog;