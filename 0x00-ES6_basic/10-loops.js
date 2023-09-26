/**
 * Appends a specified string to each element of an array.
 *
 * @param {Array} array - The input array.
 * @param {string} appendString - The string to append to each element.
 * @returns {Array} A new array with the specified string appended to each element.
 */
export default function appendToEachArrayValue(array, appendString) {
  // Create a new array to store the results.
  const resultArray = [];

  // Use the ES6 for...of loop to iterate through the elements of the input array.
  for (const value of array) {
    // Append the specified string to each element and push it to the result array.
    resultArray.push(appendString + value);
  }

  // Return the result array with appended values.
  return resultArray;
}
