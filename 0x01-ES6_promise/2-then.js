/**
 * Appends handlers to a Promise and performs specific actions when resolved or rejected.
 *
 * @param {Promise} promise - The Promise to handle.
 * @returns {Promise} A new Promise with added handlers.
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => ({ Error() }))
    .finally(() => {
      console.log('Got a response from the API');
    });
}
