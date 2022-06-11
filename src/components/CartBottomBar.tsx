import React from 'react';
import Button from "./UI/Button";
import {ButtonType} from "../types/Button";
import {Link} from "react-router-dom";

const CartBottomBar = () => {
    return (
        <div className="cart-bottom-bar">
            <div>
                <p className='cart-product-count'>Всего пицц: <span>3 шт.</span></p>
                <p className='cart-product-price'>Сумма заказа: <span>900 ₽</span></p>
            </div>
            <div>
                <Link to={'/'}>
                    <Button type={ButtonType.SHADOW_BUTTON}>Вернуться назад </Button>
                </Link>
                <Button type={ButtonType.ORANGE_BUTTON}>Оплатить сейчас</Button>
            </div>
        </div>
    );
};

export default CartBottomBar;