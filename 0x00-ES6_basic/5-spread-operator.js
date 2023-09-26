/**
 * Concatenates two arrays and spreads the characters of a string.
 *
 * @param {Array} array1 - The first array.
 * @param {Array} array2 - The second array.
 * @param {string} string - The string to spread.
 * @returns {Array} A new array containing the concatenated arrays and spread characters.
 */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
