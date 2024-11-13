import { useState } from 'react';
import dynamic from 'next/dynamic'
import { CgChevronRight as ChevronIcon } from "react-icons/cg"
import {
    productBox,
    container,
    header,
    productImageWrapper,
    productImageList,
    productImageListItem,
    scrollForMore,
    noImagePreview,
    optionsWrapper,
    priceValue,
    selectVariant,
    labelFont,
    breadcrumb,
    tagList,
    addToCartStyle,
    metaSection,
    productDescription,
} from "./[productHandle].module.css"
import Link from 'next/link';
import { NumericInput } from '../../../E-Commerce/components/Products/numeric-input';
import { AddToCart } from '../../../E-Commerce/components/Cart/add-to-cart';
import isEqual from 'lodash/isEqual';
import { shopifyClient, parseShopifyResponse } from '../../../E-Commerce/lib/shopify';
const Countdown = dynamic(() => import('../../../E-Commerce/components/Countdown/countdown'), {
  ssr: false,
})

export default function ProductPage({product}) {
    const {
        options,
        variants,
        variants: [initialVariant],
        priceRangeV2,
        title,
        description,
        images,
        images: [firstImage],
    } = product;
    const [quantity, setQuantity] = useState(1);
    const [variant, setVariant] = useState({ ...initialVariant })

    const handleOptionChange = (index, event) => {
        const value = event.target.value;
    
        if (value === "") {
            return
        }
       
        const currentOptions = [...variant.selectedOptions];
    
        currentOptions[index] = {
            ...currentOptions[index],
            value,
        }
        
        const selectedVariant = variants.find((variant) => {
            return isEqual(currentOptions, variant.selectedOptions)
        })
    
        setVariant({ ...selectedVariant })
    }

    const hasVariants = variants.length > 1
    const hasImages = images.length > 0
    const hasMultipleImages = true || images.length > 1

    return (
        <>
            <div className={container}>
                <div className={productBox}>
                    {hasImages && (
                        <div className={productImageWrapper}>
                            <div
                                role="group"
                                aria-label="gallery"
                                aria-describedby="instructions"
                            >
                                <ul className={productImageList}>
                                    {images.map((image, index) => (
                                        <li
                                            key={`product-image-${image.id}`}
                                            className={productImageListItem}
                                            style={{maxHeight: "640px"}}
                                        >
                                            <img
                                                loading={index === 0 ? "eager" : "lazy"}
                                                alt={
                                                image.altText
                                                    ? image.altText
                                                    : `Product Image of ${title} #${index + 1}`
                                                }
                                                src={image.src}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {hasMultipleImages && (
                                <div className={scrollForMore} id="instructions">
                                    <span aria-hidden="true">←</span> scroll for more{" "}
                                    <span aria-hidden="true">→</span>
                                </div>
                            )}
                        </div>
                    )}
                    {!hasImages && (
                        <span className={noImagePreview}>No Preview image</span>
                    )}
                    <div>
                        <div className={breadcrumb}>
                            <Link  href={`/e-commerce/type/${product.productType}`}>{product.productType}</Link>
                            <ChevronIcon size={12} />
                        </div>
                        <h1 className={header}>{title}</h1>
						{title.includes('Planter Pot') && (
                            <Countdown />
                        )}
                        <p className={productDescription}>{description}</p>
                        <h2 className={priceValue}>
                            <span>${variant.price.amount}</span>
                        </h2>
                        <fieldset className={optionsWrapper}>
                            {hasVariants &&
                                options.map(({ id, name, values }, index) => (
                                <div className={selectVariant} key={id}>
                                    <select
                                        aria-label="Variants"
                                        onChange={(event) => handleOptionChange(index, event)}
                                    >
                                        <option value="">{`Select ${name}`}</option>
                                        {values.map((value) => (
                                            <option value={value.value} key={`${name}-${value.value}`}>
                                                {value.value}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            ))}
                        </fieldset>
                        <div className={addToCartStyle}>
                            <NumericInput
                                aria-label="Quantity"
                                onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
                                onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                                onChange={(event) => setQuantity(event.currentTarget.value)}
                                value={quantity}
                                min="1"
                                max="20"
                            />
                            <AddToCart
                                variantId={variant.id}
                                quantity={quantity}
                                available={variant.available}
                            />
                        </div>
                        <div className={metaSection}>
                            <span className={labelFont}>Category</span>
                            <span className={tagList}>
                                <Link href={`/e-commerce/type/${product.productType}`}>{product.productType}</Link>
                            </span>
                            <span className={labelFont}>Tags</span>
                            <span className={tagList}>
                                {console.log(product)}
                                {product.tags?.map((tag) => (
                                    <Link href={`/e-commerce/search?t=${tag}`}>{tag}</Link>
                                ))}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export const getServerSideProps = async ({params}) => {
    const { productHandle } = params
    // Fetch one product
    const product = await shopifyClient.product.fetchByHandle(productHandle);
    return {
        props: {
            product: parseShopifyResponse(product),
        },
    };
};
