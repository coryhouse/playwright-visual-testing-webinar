import { shopifyClient } from "../../E-Commerce/lib/shopify";

export default async function handler(req, res) {
    const { checkoutID, lineItemsToUpdate } = req.body;
    const updatedCheckout = await shopifyClient.checkout.updateLineItems(checkoutID, lineItemsToUpdate);
    res.status(200).json({
        data: updatedCheckout
    });
}