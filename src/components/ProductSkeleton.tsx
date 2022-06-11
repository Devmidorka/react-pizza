import React from 'react';
import ContentLoader from "react-content-loader";

const ProductSkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={480}
            viewBox="0 0 280 480"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            className='product-card'
        >
            <circle cx="140" cy="140" r="140" />
            <rect x="1" y="294" rx="14" ry="14" width="280" height="19" />
            <rect x="5" y="341" rx="2" ry="2" width="275" height="71" />
            <rect x="0" y="424" rx="21" ry="21" width="94" height="51" />
            <rect x="130" y="425" rx="21" ry="21" width="151" height="48" />
        </ContentLoader>
    );
};

export default ProductSkeleton;