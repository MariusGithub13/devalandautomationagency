const axios = require('axios');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { email, listId } = JSON.parse(event.body);
    const API_KEY = process.env.KLAVIYO_PRIVATE_API_KEY;

    console.log(`Attempting to subscribe ${email} to list ${listId}...`);

    const response = await axios({
      method: 'post',
      url: `https://a.klaviyo.com/api/v2/list/${listId}/subscribe`,
      params: { api_key: API_KEY },
      data: { profiles: [{ email }] },
      headers: { 'Content-Type': 'application/json' }
    });

    console.log('Klaviyo Success:', response.data);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: '✓ Successfully subscribed!' })
    };

  } catch (error) {
    // THIS LOG WILL SHOW IN NETLIFY WHEN YOU CLICK THE LOG LINE
    console.error('Klaviyo Error Details:', error.response ? error.response.data : error.message);
    
    const errorMsg = error.response?.data?.detail || 'Failed to subscribe';
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ success: false, message: errorMsg })
    };
  }
};