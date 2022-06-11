import React, {FC} from 'react';
import {ProductFiltersProps} from "../types/ProductFilters";

const ProductFilters:FC<ProductFiltersProps> = (
    {
        thin,
        traditional,
        small,
        medium,
        large
    }) => {


    return (
        <div className='product-filters'>
            <span className={`filter-large ${thin ? 'active' : ''}`}>тонкое</span>
            <span className={`filter-large ${traditional ? 'active' : ''}`}>традиционное</span>
            <span className={`filter-small ${small ? 'active' : ''}`}>26см.</span>
            <span className={`filter-small ${medium ? 'active' : ''}`}>30см.</span>
            <span className={`filter-small ${large ? 'active' : ''}`}>40см.</span>
        </div>
    );
};

export default ProductFilters;