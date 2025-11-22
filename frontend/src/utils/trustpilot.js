/**
 * Send a Trustpilot service review invitation
 * @param {Object} params - Invitation parameters
 * @param {string} params.recipientEmail - Customer's email address
 * @param {string} params.recipientName - Customer's name
 * @param {string} params.referenceId - Unique reference ID (e.g., order number, form submission ID)
 * @returns {boolean} Success status
 */
export const sendTrustpilotInvitation = ({ recipientEmail, recipientName, referenceId }) => {
  try {
    // Check if Trustpilot is loaded
    if (typeof window.tp !== 'function') {
      console.warn('Trustpilot integration not loaded yet');
      return false;
    }

    const trustpilot_invitation = {
      recipientEmail,
      recipientName,
      referenceId,
      source: 'InvitationScript',
    };

    window.tp('createInvitation', trustpilot_invitation);
    console.log('Trustpilot invitation sent successfully', { recipientEmail, referenceId });
    return true;
  } catch (error) {
    console.error('Failed to send Trustpilot invitation:', error);
    return false;
  }
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
