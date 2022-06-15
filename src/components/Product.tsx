import React, {FC} from 'react';
import Button from "./UI/Button";
import {ButtonType} from "../types/Button";
import {ProductProps} from "../types/Product";
import ProductFilters from "./ProductFilters";

const Product: FC<ProductProps> = (
    {
        imageUrl,
        title,
        price,
        count,
        types,
        sizes
    }
    ) => {
    return (
        <div className='product-card'>
            <img src={`${imageUrl}`} alt="" className='product-image'/>
            <p className='product-title'>{title}</p>

            <ProductFilters types={types} sizes={sizes}/>

            <div className="product-info">
                <p className="price">от {price} ₽</p>
                <Button type={ButtonType.ADD} count={count}>Добавить</Button>
            </div>
        </div>
    );
};

export default Product;