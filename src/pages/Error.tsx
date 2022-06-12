import React from 'react';
import NavBar from "../components/NavBar";
import TextWithSmile from "../components/TextWithSmile";

const Error = () => {
    return (
        <>
            <NavBar/>
            <div className='error-page'>
                <TextWithSmile text={'Ничего не найдено'}/>
                <p>К сожалению, данная страница отсутствует в нашел интернет-магазине</p>
            </div>
        </>



    );
};

export default Error;