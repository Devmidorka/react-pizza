import React, {FC} from 'react';
import NavBar from "../components/NavBar";
import smile from '../assets/smile.svg'
import empty_logo from '../assets/empty-cart-logo.png'
import Button from "../components/UI/Button";
import {ButtonType} from "../types/Button";
import CartTopBar from "../components/CartTopBar";
import CartProduct from "../components/CartProduct";
import CartBottomBar from "../components/CartBottomBar";
import {CartProps} from "../types/Cart";
import {Link} from "react-router-dom";

const Cart:FC<CartProps> = ({products}) => {
    return (
        <>
            <NavBar isCartPage={true}/>
            <div className="cart-wrapper">
                {products.length === 0 ?
                    <>
                        <h3 className='empty-cart-title'>Корзина пустая <img src={smile} alt=""/></h3>
                        <p className="empty-cart-description">
                            Вероятней всего, вы енё не заказывали пиццу.
                            Для того, чтобы заказать пиццу, перейдите на главную страницу.
                        </p>
                        <img src={empty_logo} alt="" className='empty-logo'/>
                        <Link to={'/'}>
                            <Button type={ButtonType.BLACK_BUTTON}>Вернуться назад</Button>
                        </Link>
                    </>
                    :
                    <>
                        <CartTopBar/>
                        <div className="cart-content">
                            <CartProduct/>
                            <CartProduct/>
                            <CartProduct/>
                        </div>
                        <CartBottomBar/>
                    </>
                }
            </div>
        </>
    );
};

export default Cart;