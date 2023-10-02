/**
 * Return a string of all set values that start with a specific string.
 * @param {Set} set - The Set containing values to filter.
 * @param {string} startString - The string to match the start of values.
 * @returns {string} A string of matching values separated by '-'.
 */
function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const matchingValues = Array.from(set).filter((value) => value.startsWith(startString));
  const cleanedValues = matchingValues.map((value) => value.substring(startString.length));
  return cleanedValues.join('-');
}

export default cleanSet;
