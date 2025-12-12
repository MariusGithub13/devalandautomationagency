const https = require('https');

/**
 * Klaviyo Newsletter Subscription Handler
 * Subscribes email addresses to Klaviyo list via API
 * 
 * Required Environment Variables:
 * - KLAVIYO_PRIVATE_API_KEY: Your Klaviyo Private API Key (starts with pk_)
 * 
 * Expected Request Body:
 * {
 *   "email": "user@example.com",
 *   "listId": "YOUR_KLAVIYO_LIST_ID"
 * }
 */
exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { email, listId } = JSON.parse(event.body);

    // Validation
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Valid email address is required' })
      };
    }

    if (!listId) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'List ID is required' })
      };
    }

    const KLAVIYO_API_KEY = process.env.KLAVIYO_PRIVATE_API_KEY;

    if (!KLAVIYO_API_KEY) {
      console.error('KLAVIYO_PRIVATE_API_KEY environment variable not set');
      return {
        statusCode: 500,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Server configuration error' })
      };
    }

    // Prepare Klaviyo API request using v3 API
    const data = JSON.stringify({
      data: {
        type: 'profile-subscription-bulk-create-job',
        attributes: {
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
    });

    const options = {
      hostname: 'a.klaviyo.com',
      path: '/api/profile-subscription-bulk-create-jobs/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
        'revision': '2024-10-15'
      }
    };

    // Make request to Klaviyo API
    return new Promise((resolve) => {
      const req = https.request(options, (res) => {
        let body = '';
        
        res.on('data', (chunk) => {
          body += chunk;
        });

        res.on('end', () => {
          const success = res.statusCode === 200;
          
          if (!success) {
            console.error('Klaviyo API Error:', res.statusCode, body);
          }

          resolve({
            statusCode: success ? 200 : res.statusCode,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({
              success: success,
              message: success 
                ? 'Successfully subscribed to newsletter' 
                : 'Failed to subscribe. Please try again.',
              ...(process.env.NODE_ENV === 'development' && { debug: body })
            })
          });
        });
      });

      req.on('error', (error) => {
        console.error('Request error:', error);
        resolve({
          statusCode: 500,
          headers: { 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify({
            success: false,
            error: 'Network error. Please try again.'
          })
        });
      });

      req.write(data);
      req.end();
    });

  } catch (error) {
    console.error('Handler error:', error);
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        success: false,
        error: 'Internal server error'
      })
    };
  }
};
