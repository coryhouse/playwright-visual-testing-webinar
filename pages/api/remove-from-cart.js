import { shopifyClient } from "../../E-Commerce/lib/shopify";

export default async function handler(req, res) {
    const { checkoutID, lineItems } = req.body;
    const updatedCheckout = await shopifyClient.checkout.removeLineItems(checkoutID, lineItems);
    res.status(200).json({
        data: updatedCheckout
    });
}