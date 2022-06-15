import React, {FC} from 'react';
import {ButtonType} from "../types/Button";
import Button from "./UI/Button";
import {CategoryProps} from "../types/Category";

const Category:FC<CategoryProps> = ({title, className, onClick}) => {
    return (
        <Button
            type={ButtonType.CATEGORY}
            className={className}
            onClick={onClick}
        >{title}</Button>
    );
};

export default Category;