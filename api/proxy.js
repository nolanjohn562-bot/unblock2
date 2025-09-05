const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { url } = req.query;
  if (!url) {
    res.status(400).send('Missing url param');
    return;
  }
  try {
    const response = await fetch(url);
    const body = await response.text();
    res.setHeader('Content-Type', response.headers.get('content-type') || 'text/html');
    res.status(200).send(body);
  } catch (e) {
    res.status(500).send('Error fetching URL: ' + e.message);
  }
};
