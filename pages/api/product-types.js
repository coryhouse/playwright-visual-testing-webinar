import { shopifyClient, parseShopifyResponse } from "../../E-Commerce/lib/shopify";

shopifyClient

export default async function handler(req, res) {
    const products = parseShopifyResponse(await shopifyClient.product.fetchAll()); 
    let productTypes = new Set();
    products.forEach((product) => {
        if (product.productType) {
            productTypes.add(product.productType);
        }
    })
    productTypes = Array.from(productTypes);
    res.status(200).json({
        data: productTypes
    })
}