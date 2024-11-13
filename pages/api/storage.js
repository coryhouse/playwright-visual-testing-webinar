export default async function handler(req, res) {
  try {
    const {hostname} = req.query
    const externalApiUrl = `https://marketing-demo-applitools.azurewebsites.net/api/featureFlags/${hostname ?? '1'}`;
    console.log('Communicating with storage at', externalApiUrl)
    const apiResponse = await fetch(externalApiUrl, {
      method: req.method, // Forward the HTTP method
      headers: { // Forward the headers you need, adjust as necessary
        'Content-Type': 'application/json',
        // Include other headers as required
      },
      body: req.method !== 'GET' ? JSON.stringify('') : undefined,
    });

    if (req.method === 'GET') {
      const data = await apiResponse.json(); // Assuming the response is JSON
      // Forward the status code and response data
	  console.log(data);
      res.status(apiResponse.status).json(data);
    } else {
      res.status(200).json('{}')
    }
  } catch (error) {
    console.error('There was a problem when communicating with storage', error)
    // Handle errors, such as network issues or JSON parsing errors
    res.status(500).json({ error: 'Failed to fetch data from the external API' });
  }
}

