/**
 * Send a Trustpilot service review invitation
 * @param {Object} params - Invitation parameters
 * @param {string} params.recipientEmail - Customer's email address
 * @param {string} params.recipientName - Customer's name
 * @param {string} params.referenceId - Unique reference ID (e.g., order number, form submission ID)
 * @returns {Promise<boolean>} Success status
 */
export const sendTrustpilotInvitation = ({ recipientEmail, recipientName, referenceId }) => {
  return new Promise((resolve) => {
    try {
      // Wait for Trustpilot to load if it's not ready yet
      const checkAndSend = (attempts = 0) => {
        if (typeof window.tp === 'function') {
          const trustpilot_invitation = {
            recipientEmail,
            recipientName,
            referenceId,
            source: 'InvitationScript',
          };

          window.tp('createInvitation', trustpilot_invitation);
          console.log('✅ Trustpilot invitation sent successfully', { 
            recipientEmail, 
            recipientName,
            referenceId 
          });
          resolve(true);
        } else if (attempts < 20) {
          // Retry up to 20 times (10 seconds total)
          console.log(`⏳ Waiting for Trustpilot to load... (attempt ${attempts + 1}/20)`);
          setTimeout(() => checkAndSend(attempts + 1), 500);
        } else {
          console.error('❌ Trustpilot integration not loaded after 10 seconds');
          resolve(false);
        }
      };

      checkAndSend();
    } catch (error) {
      console.error('❌ Failed to send Trustpilot invitation:', error);
      resolve(false);
    }
  });
};

/**
 * Generate a unique reference ID for form submissions
 * @param {string} prefix - Prefix for the reference ID (e.g., 'Contact', 'Order')
 * @returns {string} Unique reference ID
 */
export const generateReferenceId = (prefix = 'Contact') => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9);
  return `${prefix}_${timestamp}_${random}`;
};
