/**
 * Iterates through an iterator object and returns a string
 * containing all employee names separated by '|'.
 *
 * @param {Object} reportWithIterator - An iterator object.
 * @returns {string} A string containing all employee names separated by '|'.
 */
export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty array to store employee names.
  const employeeNames = [];

  // Iterate through the iterator object.
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  // Join the employee names using the '|' separator and return as a string.
  return employeeNames.join(' | ');
}
