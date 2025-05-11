// pages/api/subscribe.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  // Simulated success response. Replace with real integration (e.g., Mailchimp, DB).
  console.log('Received subscription from:', email);

  return res.status(200).json({ message: 'Subscription successful.' });
}
