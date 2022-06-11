import React from 'react';
import CartLogo from "./CartLogo";
import Trash from "./Trash";

const CartTopBar = () => {
    return (
        <div className="cart-top-bar">
            <div>
                <CartLogo color={'black'} width={'29px'} height={'29px'}/>
                <p>Корзина</p>
            </div>
            <div>
                <Trash width={'20px'} height={'20px'} color={'#B6B6B6'}/>
                <span>Очистить корзину</span>

            </div>
        </div>
    );
};

export default CartTopBar;