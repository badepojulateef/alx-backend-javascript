/**
 * Check if all elements in the array exist within the set.
 * @param {Set} set - The Set to check against.
 * @param {Array} array - The array containing elements to check.
 * @returns {boolean} true if all elements in the array exist within the set, otherwise false.
 */
function hasValuesFromArray(set, array) {
  for (const element of array) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}

export default hasValuesFromArray;
