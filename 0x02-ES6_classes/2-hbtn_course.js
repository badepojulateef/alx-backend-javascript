/**
 * Represents a Holberton course.
 */
class HolbertonCourse {
  /**
   * Creates a new Holberton course instance.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course in weeks.
   * @param {string[]} students - An array of student names.
   * @throws {TypeError} If the attributes are of invalid types.
   */
  constructor(name, length, students) {
    this._name = ''; // Initialize to an empty string
    this._length = 0; // Initialize to 0
    this._students = []; // Initialize to an empty array

    this.name = name; // Use the setter for type validation
    this.length = length; // Use the setter for type validation
    this.students = students; // Use the setter for type validation
  }

  /**
   * Gets the name of the course.
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the course.
   * @param {string} value - The new name for the course.
   * @throws {TypeError} If the value is not a string.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of the course in weeks.
   * @returns {number} The length of the course in weeks.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of the course in weeks.
   * @param {number} value - The new length for the course in weeks.
   * @throws {TypeError} If the value is not a number.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the array of student names.
   * @returns {string[]} An array of student names.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the array of student names.
   * @param {string[]} value - An array of student names.
   * @throws {TypeError} If the value is not an array of strings.
   */
  set students(value) {
    if (!Array.isArray(value) || value.some((name) => typeof name !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}

export default HolbertonCourse;
