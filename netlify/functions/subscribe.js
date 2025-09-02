// netlify/functions/subscribe.js

import fetch from 'node-fetch';

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { email } = JSON.parse(event.body);

    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email address.' }),
      };
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error('Missing BREVO_API_KEY');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error.' }),
      };
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [5], // Replace with your valid list ID
        updateEnabled: true,
      }),
    });

    if (response.status === 201) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'You have been subscribed successfully.' }),
      };
    }

    if (response.status === 204) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'You are already subscribed.' }),
      };
    }

    const errorBody = await response.json();
    return {
      statusCode: response.status,
      body: JSON.stringify({
        error: errorBody.message || 'Unknown error from Brevo',
      }),
    };
  } catch (err) {
    console.error('Brevo subscription error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error.' }),
    };
  }
}
