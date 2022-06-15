import React, {FC} from 'react';
import {ProductFiltersProps, ProductSizes} from "../types/ProductFilters";

const ProductFilters:FC<ProductFiltersProps> = ({types, sizes}) => {
    console.log(sizes.includes(ProductSizes.medium))
    return (
        <div className='product-filters'>
            <span className={`filter-large ${types.includes(0) ? 'active' : ''}`}>тонкое</span>
            <span className={`filter-large ${types.includes(1) ? 'active' : ''}`}>традиционное</span>
            <span className={`filter-small ${sizes.includes(ProductSizes.small) ? 'active' : ''}`}>26см.</span>
            <span className={`filter-small ${sizes.includes(ProductSizes.medium) ? 'active' : ''}`}>30см.</span>
            <span className={`filter-small ${sizes.includes(ProductSizes.medium) ? 'active' : ''}`}>40см.</span>
        </div>
    );
};

export default ProductFilters;