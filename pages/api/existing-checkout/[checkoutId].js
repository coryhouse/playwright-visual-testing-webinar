import { shopifyClient } from "../../../E-Commerce/lib/shopify";

export default async function handler(req, res) {
    const { checkoutId } = req.query;
    const existingCheckout = await shopifyClient.checkout.fetch(
        checkoutId
    );
    
    res.status(200).json({
        data: existingCheckout
    })
}