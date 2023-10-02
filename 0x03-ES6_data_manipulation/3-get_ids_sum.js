/**
 * Get the sum of all student IDs.
 * @param {Array} studentList - An array of student objects.
 * @returns {number} The sum of all student IDs.
 */
function getStudentIdsSum(studentList) {
  return studentList.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
