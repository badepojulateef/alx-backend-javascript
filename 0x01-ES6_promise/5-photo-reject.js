/**
 * Upload a photo with the provided file name.
 *
 * @param {string} fileName - The name of the file to upload.
 * @returns {Promise} A rejected Promise with an Error message indicating the file cannot be processed.
 */
export default function uploadPhoto(fileName) {
  // Create and return a rejected Promise with an Error message.
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
