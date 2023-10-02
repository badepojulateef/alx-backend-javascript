/**
 * Update student grades for a specific city.
 * @param {Array} studentList - An array of student objects.
 * @param {string} city - The city to filter students by.
 * @param {Array} newGrades - An array of objects with student grades.
 * @returns {Array} An array of students with updated grades for the specified city.
 */
function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObject ? gradeObject.grade : 'N/A';
      return {
        ...student,
        grade,
      };
    });
}

export default updateStudentGradeByCity;
