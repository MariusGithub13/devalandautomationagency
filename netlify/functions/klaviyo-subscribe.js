const https = require('https');

/**
 * Klaviyo Newsletter Subscription Handler
 * Subscribes email addresses to Klaviyo list via API v2024-10-15
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
        body: JSON.stringify({ 
          success: false,
          message: 'Valid email address is required' 
        })
      };
    }

    if (!listId) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ 
          success: false,
          message: 'List ID is required' 
        })
      };
    }

    const KLAVIYO_API_KEY = process.env.KLAVIYO_PRIVATE_API_KEY;

    if (!KLAVIYO_API_KEY) {
      console.error('KLAVIYO_PRIVATE_API_KEY environment variable not set');
      return {
        statusCode: 500,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ 
          success: false,
          message: 'Server configuration error' 
        })
      };
    }

    // Step 1: Create/Update Profile first
    const profileData = JSON.stringify({
      data: {
        type: 'profile',
        attributes: {
          email: email
        }
      }
    });

    const profileOptions = {
      hostname: 'a.klaviyo.com',
      path: '/api/profiles/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
        'revision': '2024-10-15'
      }
    };

    // Create profile
    const profileResult = await new Promise((resolve, reject) => {
      const req = https.request(profileOptions, (res) => {
        let body = '';
        res.on('data', (chunk) => { body += chunk; });
        res.on('end', () => {
          try {
            const data = JSON.parse(body);
            if (res.statusCode === 201 || res.statusCode === 200) {
              resolve(data.data.id);
            } else {
              console.error('Profile creation error:', res.statusCode, body);
              reject(new Error(`Profile creation failed: ${res.statusCode}`));
            }
          } catch (e) {
            reject(e);
          }
        });
      });
      req.on('error', reject);
      req.write(profileData);
      req.end();
    });

    // Step 2: Subscribe profile to list
    const subscriptionData = JSON.stringify({
      data: [
        {
          type: 'profile-subscription-bulk-create-job',
          attributes: {
            custom_source: 'Website Newsletter Form',
            profiles: {
              data: [
                {
                  type: 'profile',
                  id: profileResult,
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
      ]
    });

    const subscriptionOptions = {
      hostname: 'a.klaviyo.com',
      path: '/api/profile-subscription-bulk-create-jobs/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
        'revision': '2024-10-15'
      }
    };

    // Subscribe to list
    return new Promise((resolve) => {
      const req = https.request(subscriptionOptions, (res) => {
        let body = '';
        
        res.on('data', (chunk) => {
          body += chunk;
        });

        res.on('end', () => {
          const success = res.statusCode === 202 || res.statusCode === 201 || res.statusCode === 200;
          
          if (!success) {
            console.error('Klaviyo Subscription Error:', res.statusCode, body);
          } else {
            console.log('Klaviyo Subscription Success:', res.statusCode);
          }

          resolve({
            statusCode: success ? 200 : 500,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({
              success: success,
              message: success 
                ? 'Successfully subscribed to newsletter' 
                : 'Failed to subscribe. Please try again.'
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
            message: 'Network error. Please try again.'
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
