export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('BREVO_API_KEY is not defined in environment');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [2],  // Ensure this list ID exists in your Brevo account
        updateEnabled: true,
      }),
    });

    const text = await response.text();

    let data = {};
    if (text) {
      try {
        data = JSON.parse(text);
      } catch (err) {
        console.error('Non-JSON response from Brevo:', {
          status: response.status,
          headers: Object.fromEntries(response.headers.entries()),
          body: text
        });
        return res.status(500).json({ error: 'Unexpected response from Brevo.' });
      }
    }

    if (response.ok || response.status === 204) {
      return res.status(200).json({ message: 'You are already subscribed or successfully added.' });
    } else {
      return res.status(response.status).json({ error: data.message || 'Subscription failed.' });
    }

  } catch (error) {
    console.error('Unexpected internal error:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}
