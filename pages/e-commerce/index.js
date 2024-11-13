import * as React from 'react';
import ProductsList from '../../E-Commerce/components/Products/ProductsList';
import { shopifyClient, parseShopifyResponse } from '../../E-Commerce/lib/shopify';
shopifyClient
import {
    container,
    intro,
} from "./index.module.css"

function Hero (props) {
    return (
      <div className={container}>
        <h1 className={intro}>Welcome to the EyeStore!</h1>
        <p>See how Applitools can help secure visual perfection across all your digital experiences.</p>
      </div>
    )
}

export default function Index({products, productTypes}) {
  return (
    <>
        <Hero />
        {console.log(products)}
        <ProductsList products={products} />
    </>
  );
}

export const getServerSideProps = async () => {
    // Fetch all the products
    const products = parseShopifyResponse(await shopifyClient.product.fetchAll());
    let productTypes = new Set();
    products.forEach((product) => {
        if (product.productType) {
            productTypes.add(product.productType);
        }
    })
    productTypes = Array.from(productTypes);
    return {
        props: {
            products,
            productTypes
        },
    };
};