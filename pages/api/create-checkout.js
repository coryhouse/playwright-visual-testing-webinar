import { shopifyClient } from "../../E-Commerce/lib/shopify";

export default async function handler(req, res) {
    try {
        const newCheckout = await shopifyClient.checkout.create();
        
        res.status(200).json({
            data: newCheckout
        });
    } catch(e) {
        console.log(e);
    }
    
}