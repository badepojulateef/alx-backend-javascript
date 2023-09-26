/**
 * Creates an object representing a department and its employees.
 *
 * @param {string} departmentName - The name of the department.
 * @param {Array<string>} employees - An array of employee names.
 * @returns {Object} An object with the department name as
 * the key and an array of employees as the value.
 */
export default function createEmployeesObject(departmentName, employees) {
  // Create an object with the specified department name and employees array.
  const employeesObject = {
    [departmentName]: employees,
  };

  // Return the created object.
  return employeesObject;
}
