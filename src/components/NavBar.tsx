import React, {FC} from 'react';
import Button from "./UI/Button";
import {ButtonType} from "../types/Button";
import CartLogo from "./CartLogo";
import logo from '../assets/logo.png'
import {NavBarProps} from "../types/NavBar";
import {Link} from "react-router-dom";

const NavBar: FC<NavBarProps> = ({isCartPage}) => {
    return (
        <div className="navbar">
            <Link to={'/'}>
                <div className='navbar-left'>
                    <img src={logo} alt=""/>
                    <div className="logo-info">
                        <h1>REACT PIZZA</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
            </Link>
            {!isCartPage &&
                <Button
                    type={ButtonType.HALF_BUTTON}
                    leftContent={'520P'}
                    rightContent={
                        <div className='cart-info'>
                            <CartLogo color={'white'} width={'16px'} height={'16px'}/>
                            <span>3</span>
                        </div>
                    }
                />
            }

        </div>
    );
};

export default NavBar;