import React, {FC} from 'react';

import List from "../components/List";
import Category from "../components/Category";
import {CategoryProps} from "../types/Category";
import Product from "../components/Product";
import {ProductProps} from "../types/Product";
import Sort from "../components/Sort";
import NavBar from "../components/NavBar";

const Catalog:FC = () => {
    const categories: CategoryProps[] = [
        {title: 'Все'},
        {title: 'Мясные'},
        {title: 'Вегетарианская'},
        {title: 'Гриль'},
        {title: 'Острые'},
        {title: 'Закрытые'},
    ]

    const products: ProductProps[] = [
        {
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
            img: 'cheese-pizza.png',
            title: 'Сырная',
            price: 450,
            filters:{
                thin: true,
                small: true,
            }
        },
        {
            img: 'shrimps-pizza.png',
            title: 'Креветки по-азиатски',
            price: 290,
            filters:{
                thin: true,
                medium: true,
            }
        },
        {
            img: 'chick-pizza.png',
            title: 'Сырный цыпленок',
            price: 385,
            filters:{
                thin: true,
                small: true,
            }
        },
        {
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
            img: 'cheese-pizza.png',
            title: 'Сырная',
            price: 450,
            filters:{
                thin: true,
                small: true,
            }
        },
        {
            img: 'shrimps-pizza.png',
            title: 'Креветки по-азиатски',
            price: 290,
            filters:{
                thin: true,
                medium: true,
            }
        },
        {
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
                        renderItem={(category: CategoryProps) => <Category title={category.title}/>}
                    />
                </div>
                <Sort/>
            </div>

            <p className='catalog-title'>Все пиццы</p>

            <div className="catalog-list">
                <List
                    items={products}
                    renderItem={(product:ProductProps) =>
                        <Product {...product}/>
                    }
                />
            </div>

        </div>
    );
};

export default Catalog;