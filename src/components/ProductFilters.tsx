import React, {FC} from 'react';
import {ProductFiltersProps} from "../types/ProductFilters";

const ProductFilters:FC<ProductFiltersProps> = () => {


    return (
        <div className='product-filters'>
            <span className={`filter-large`}>тонкое</span>
            <span className={`filter-large`}>традиционное</span>
            <span className={`filter-small`}>26см.</span>
            <span className={`filter-small`}>30см.</span>
            <span className={`filter-small`}>40см.</span>
        </div>
    );
};

export default ProductFilters;