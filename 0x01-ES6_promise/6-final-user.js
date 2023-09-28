import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handle the profile signup process by calling signUpUser and uploadPhoto functions.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The name of the file to upload.
 * @returns {Promise} A Promise that resolves to an array of objects containing the status and value/error of the Promises.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Create Promises for signUpUser and uploadPhoto.
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to collectively resolve all Promises.
  return Promise.allSettled([userPromise, photoPromise]).then((results) => {
    // Map the results to objects with status and value/error.
    return results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }));
  });
}
