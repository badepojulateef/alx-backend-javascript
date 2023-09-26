/**
 * Creates a report object based on the provided employees list.
 *
 * @param {Object} employeesList - An object containing department names and employee lists.
 * @returns {Object} A report object with allEmployees and getNumberOfDepartments methods.
 */
export default function createReportObject(employeesList) {
  // Create an object with the allEmployees key, spreading the provided employees list.
  const reportObject = {
    allEmployees: { ...employeesList },

    /**
     * Gets the number of departments from the employees list.
     *
     * @param {Object} employees - An object containing department names and employee lists.
     * @returns {number} The number of departments.
     */
    getNumberOfDepartments(employees) {
      // Count the number of keys (departments) in the employees object.
      return Object.keys(employees).length;
    },
  };

  // Return the created report object.
  return reportObject;
}
