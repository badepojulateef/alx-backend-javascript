const fs = require('fs');

/**
 * Count and display the number of students in different fields.
 * @param {string} fileName - The name of the file containing student data.
 */
function countStudents(fileName) {
  const students = {};
  const fields = {};

  try {
    // Read file content synchronously
    const content = fs.readFileSync(fileName, 'utf-8');
    
    // Split content into lines
    const lines = content.trim().split('\n');

    // Process each line
    lines.forEach((line) => {
      if (line) {
        const [name, age, field] = line.split(',').map((item) => item.trim());

        // Update students object
        students[field] = students[field] ? [...students[field], name] : [name];

        // Update fields object
        fields[field] = (fields[field] || 0) + 1;
      }
    });

    // Display results
    const totalStudents = lines.length;
    console.log(`Number of students: ${totalStudents}`);

    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
