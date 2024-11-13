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

export const ProductCard = ({product}) => {
    const {
        title,
        images: [firstImage],
        vendor,
        storefrontImages,
    } = product;
    const defaultImageHeight = 400
    const defaultImageWidth = 400

    const hasImage = firstImage || Object.getOwnPropertyNames({}).length

    return (
        <Link
            className={productCardStyle}
            href={`/e-commerce/products/${product.handle}`}
            aria-label={`View ${title} product page`}
        >
            {hasImage
                ? (
                    <div className={productImageStyle} data-name="product-image-box">
                        <img
                            alt={firstImage?.altText ?? title}
                            src={firstImage?.src}
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
                <div className={productPrice}>${product?.variants?.[0].price.amount}</div>
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
