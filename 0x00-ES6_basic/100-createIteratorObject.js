/**
 * Creates an iterator object to iterate through every employee in every department.
 *
 * @param {Object} report - The report object containing department names and employee lists.
 * @returns {Object} An iterator object.
 */
export default function createIteratorObject(report) {
  // Define a generator function that yields each employee name.
  function* iterateEmployees(report) {
    for (const department of Object.keys(report.allEmployees)) {
      for (const employee of report.allEmployees[department]) {
        yield employee;
      }
    }
  }

  // Create and return the iterator object.
  const iterator = iterateEmployees(report);
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      return iterator.next();
    },
  };
}
