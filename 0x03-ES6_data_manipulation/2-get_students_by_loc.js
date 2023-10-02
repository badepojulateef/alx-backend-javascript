/**
 * Get students whose location matches the specified location.
 * @param {Array} studentList - An array of student objects.
 * @param {string} location - The location to filter by.
 * @returns {Array} An array of student objects with the specified location.
 */
function getStudentsByLocation(studentList, location) {
  return studentList.filter((student) => student.location === location);
}

export default getStudentsByLocation;
