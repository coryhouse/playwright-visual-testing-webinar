import { getSearchResults } from "../../E-Commerce/utils/search";

export default async function handler(req, res) {
    const query = req.body.query;
    const products = await getSearchResults({
        query, 
        count: 50
    });
    res.status(200).json({
        data: products
    });
}