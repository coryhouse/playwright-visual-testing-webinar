import { kv } from '@vercel/kv';

export default async function handler(req, res) {
	try {
		if (req.headers.accesskey != 'mysecretkey') {
			return res.status(401).send({
				error: 'Unauthorized: access key not valid'
			})
		}
		const {email, name, contactReason} = req.body;
		const id = Array.from({length: 5}, () => Math.floor(Math.random() * 10)).join('');
		const value = {email, name, contactReason, createdAt: Date.now(), status: 'SUBMITTED'}
		// Expire and delete in one week
		await kv.set(id, JSON.stringify(value), {ex: 604800})
		res.status(200).json({
			id
		})
	} catch (error) {
	  	res.status(500).json({ error: 'Error submitting request' });
	}
}
  