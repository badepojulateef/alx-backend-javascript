/**
 * Represents a Holberton class.
 */
export class HolbertonClass {
  /**
   * Creates a new HolbertonClass instance.
   * @param {number} year - The year of the class.
   * @param {string} location - The location of the class.
   */
  constructor(year, location) {
    /**
     * The year of the class.
     * @type {number}
     * @private
     */
    this._year = year;

    /**
     * The location of the class.
     * @type {string}
     * @private
     */
    this._location = location;
  }

  /**
   * Gets the year of the class.
   * @returns {number} The year.
   */
  get year() {
    return this._year;
  }

  /**
   * Gets the location of the class.
   * @returns {string} The location.
   */
  get location() {
    return this._location;
  }
}

/**
 * Represents a student at Holberton.
 */
export class StudentHolberton {
  /**
   * Creates a new StudentHolberton instance.
   * @param {string} firstName - The first name of the student.
   * @param {string} lastName - The last name of the student.
   * @param {HolbertonClass} holbertonClass - The Holberton class the student belongs to.
   */
  constructor(firstName, lastName, holbertonClass) {
    /**
     * The first name of the student.
     * @type {string}
     * @private
     */
    this._firstName = firstName;

    /**
     * The last name of the student.
     * @type {string}
     * @private
     */
    this._lastName = lastName;

    /**
     * The Holberton class the student belongs to.
     * @type {HolbertonClass}
     * @private
     */
    this._holbertonClass = holbertonClass;
  }

  /**
   * Gets the full name of the student.
   * @returns {string} The full name.
   */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * Gets the Holberton class the student belongs to.
   * @returns {HolbertonClass} The Holberton class.
   */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
   * Gets a full description of the student including name, class year, and location.
   * @returns {string} The full student description.
   */
  get fullStudentDescription() {
    return `${this.fullName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Export an array of students
export default [student1, student2, student3, student4, student5];
