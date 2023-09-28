/**
 * Returns a Promise that resolves or rejects based on the success parameter.
 *
 * @param {boolean} success - A boolean indicating the success status.
 * @returns {Promise} A Promise that resolves with a response object or rejects with an error.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // Resolve the Promise with a success response object.
      resolve({ status: 200, body: 'Success' });
    } else {
      // Reject the Promise with an error indicating API failure.
      reject(new Error('The fake API is not working currently'));
    }
  });
}
