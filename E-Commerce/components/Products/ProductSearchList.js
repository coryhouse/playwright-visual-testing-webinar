import * as React from 'react';
import { listingContainerStyle } from "./productsList.module.css"
import Link from 'next/link';
import {
    productCardStyle,
    productHeadingStyle,
    productImageStyle,
    productDetailsStyle,
    productVendorStyle,
    productPrice,
    productImage,
  } from "./product-card.module.css";
import { formatPrice } from '../../utils/format-price';

export const ProductCard = ({product}) => {
    const {
        title,
        priceRangeV2,
        slug,
        handle,
        images: [firstImage],
        vendor,
        storefrontImages,
    } = product
    const price = formatPrice(
        priceRangeV2.minVariantPrice.currencyCode,
        priceRangeV2.minVariantPrice.amount
    )
    const defaultImageHeight = 400
    const defaultImageWidth = 400

    const hasImage = true;
    return (
        <Link
            className={productCardStyle}
            href={`/e-commerce/products/${handle}`}
            aria-label={`View ${title} product page`}
        >
            {hasImage
                ? (
                    <div className={productImageStyle} data-name="product-image-box">
                        <img
                            alt={firstImage?.altText ?? title}
                            src={storefrontImages.edges[0].node.originalSrc}
                            className={productImage}
                        />
                    </div>
                ) : (
                    <div style={{ height: defaultImageHeight, width: defaultImageWidth }} />
                )
            }
            <div className={productDetailsStyle}>
                <div className={productVendorStyle}>{vendor}</div>
                    <h2 as="h2" className={productHeadingStyle}>
                        {title}
                    </h2>
                <div className={productPrice}>{price}</div>
            </div>
        </Link>
    )
}

export default function ProductsList({products}) {
    return (
        <div className={listingContainerStyle}>
            {products.map((p, index) => (
                <ProductCard product={p} key={p.id}/>
            ))}
        </div>
    )
};
