import React, {FC} from 'react';
import smile from "../assets/smile.svg";
import {TextWithSmileProps} from "../types/TextWithSmile";

const TextWithSmile:FC<TextWithSmileProps> = ({text}) => {
    return (
        <div className='text-with-smile'>
            <img src={smile} alt=""/>
            <h5>{text}</h5>
        </div>
    );
};

export default TextWithSmile;