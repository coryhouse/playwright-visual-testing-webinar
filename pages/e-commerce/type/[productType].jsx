import * as React from "react"
import { title } from "./[productType].module.css"
import { parseShopifyResponse, shopifyClient } from "../../../E-Commerce/lib/shopify";
import ProductsList from "../../../E-Commerce/components/Products/ProductsList";

export default function ProductTypeIndex({products, productType}) {
  return (
    <>
      <h1 className={title}>{productType}</h1>
      <ProductsList products={products} />
    </>
  )
}

export const getServerSideProps = async ({params}) => {
    // Fetch all the products
    const { productType } = params;
    const products = parseShopifyResponse(await shopifyClient.product.fetchQuery({query: `product_type:${productType}`}));
    return {
        props: {
            products,
            productType
        },
    };
};