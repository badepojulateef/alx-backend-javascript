const { readFile } = require('fs').promises;

/**
 * Count and display the number of students in different fields asynchronously.
 * @param {string} fileName - The name of the file containing student data.
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 */
async function countStudents(fileName) {
  try {
    // Read file content asynchronously using fs.promises.readFile
    const data = await readFile(fileName, 'utf-8');

    // Split content into lines
    const lines = data.trim().split('\n');
    const students = {};
    const fields = {};

    // Process each line
    lines.forEach((line) => {
      if (line) {
        // Split line into individual data components and trim whitespaces
        const [name, age, field] = line.split(',').map((item) => item.trim());

        // Update students object
        students[field] = students[field] ? [...students[field], name] : [name];

        // Update fields object
        fields[field] = (fields[field] || 0) + 1;
      }
    });

    // Display results
    const totalStudents = lines.length;
    console.log(`Number of students: ${totalStudents - 1}`);

    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    // Handle errors and throw a more informative error message
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
