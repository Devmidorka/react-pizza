import React from 'react';
import Button from "./UI/Button";
import {ButtonType} from "../types/Button";
import CartLogo from "./CartLogo";

const NavBar = () => {
    return (
        <div className="navbar">
            <div>
                <img src="/images/logo.png" alt=""/>
                <div className="logo-info">
                    <h1>REACT PIZZA</h1>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            </div>
            <Button
                type={ButtonType.HALF_BUTTON}
                leftContent={'520P'}
                rightContent={
                    <div className='cart-info'>
                        <CartLogo/>
                        <span>3</span>
                    </div>
                }
            />
        </div>
    );
};

export default NavBar;