import { uploadPhoto, createUser } from './utils';

/**
 * Handles the profile signup process by collectively resolving promises.
 *
 * @returns {Promise<Array<{ firstName: string, lastName: string }>>} A Promise that resolves to an array of user data.
 */
export default function handleProfileSignup() {
  // Create an array of promises for uploadPhoto and createUser.
  const promises = [uploadPhoto(), createUser()];

  // Use Promise.all to collectively resolve all promises.
  return Promise.all(promises).then((res) => {
    console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
