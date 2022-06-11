import React from 'react';
import smile from '../assets/smile.svg'
import NavBar from "../components/NavBar";

const Error = () => {
    return (
        <>
            <NavBar/>
            <div className='error-page'>
                <div>
                    <img src={smile} alt=""/>
                    <h5>Ничего не найдено</h5>
                </div>
                <p>К сожалению, данная странциа отсутствует в нашел интернет-магазине</p>
            </div>
        </>



    );
};

export default Error;