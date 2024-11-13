import { kv } from '@vercel/kv';

export default async function handler(req, res) {
	try {
		if (req.headers.accesskey != 'mysecretkey') {
			return res.status(401).send({
				error: 'Unauthorized: access key not valid'
			})
		}
		const id = req.query.id;
		if (!id) {
			return res.status(400).send({
				error: 'id parameter is required'
			})
		}
		
		const contactReq = await kv.get(id);
		res.status(200).json({
			data: contactReq
		})
	} catch (error) {
	  	res.status(500).json({ error: 'Error submitting request' });
	}
}
  