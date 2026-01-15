const axios = require('axios');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { email, listId } = JSON.parse(event.body);
    const API_KEY = process.env.KLAVIYO_PRIVATE_API_KEY;

    if (!API_KEY) {
      throw new Error('Missing KLAVIYO_PRIVATE_API_KEY in environment variables');
    }

    console.log(`Attempting v3 subscribe: ${email} to list ${listId}`);

    // Klaviyo v3 API Call for Subscribing Profiles
    const response = await axios({
      method: 'post',
      url: 'https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/',
      headers: {
        'Authorization': `Klaviyo-API-Key ${API_KEY}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'revision': '2024-02-15'
      },
      data: {
        data: {
          type: 'profile-subscription-bulk-create-job',
          attributes: {
            custom_source: 'voice-ai-roadmap',
            profiles: {
              data: [
                {
                  type: 'profile',
                  attributes: {
                    email: email,
                    subscriptions: {
                      email: {
                        marketing: {
                          consent: 'SUBSCRIBED'
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          relationships: {
            list: {
              data: {
                type: 'list',
                id: listId
              }
            }
          }
        }
      }
    });

    console.log('Klaviyo v3 Success:', JSON.stringify(response.data));
    return {
      statusCode: 202,
      body: JSON.stringify({ success: true, message: '✓ Successfully subscribed!' })
    };

  } catch (error) {
    console.error('Klaviyo v3 Error Details:', error.response ? JSON.stringify(error.response.data) : error.message);
    
    // Handle the retired API error specifically if it somehow persists
    let errorMsg = 'Failed to subscribe';
    if (error.response?.data?.errors?.[0]?.detail) {
      errorMsg = error.response.data.errors[0].detail;
    }

    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ success: false, message: errorMsg })
    };
  }
};