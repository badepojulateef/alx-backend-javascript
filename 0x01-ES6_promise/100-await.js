import { uploadPhoto, createUser } from './utils';

/**
 * Asynchronously upload a photo and create a user,
 * returning the results in an object.
 *
 * @returns {Promise<Object>} An object with 'photo' and 'user'
 * 	properties containing the responses,
 * 	or an empty object if any of the async functions fails.
 */
export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return { photo, user };
  } catch (error) {
    // Return an empty object in case of failure.
    return { photo: null, user: null };
  }
}
