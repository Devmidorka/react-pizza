import React from 'react';
import Button from "./UI/Button";
import {ButtonType} from "../types/Button";

const CartProduct = () => {
    return (
        <div className="cart-content-product">
            <div className='cart-product-info'>
                <img src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg" alt=""/>
                <div className="info">
                    <p className='title'>Сырный цыпленок</p>
                    <p className="options">тонкое тесто, 26 см.</p>
                </div>
            </div>
            <div className="control">
                <Button type={ButtonType.MINUS_BUTTON}/>
                <span>2</span>
                <Button type={ButtonType.PLUS_BUTTON}/>
            </div>
            <p className="price">770 ₽ </p>
            <Button type={ButtonType.DELETE_BUTTON}/>

        </div>
    );
};

export default CartProduct;