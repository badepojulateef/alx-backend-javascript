/**
 * Represents a Holberton class.
 */
class HolbertonClass {
  /**
   * Creates a new HolbertonClass instance.
   * @param {number} size - The size of the class.
   * @param {string} location - The location of the class.
   */
  constructor(size, location) {
    /**
     * The size of the class.
     * @type {number}
     * @private
     */
    this._size = size;

    /**
     * The location of the class.
     * @type {string}
     * @private
     */
    this._location = location;
  }

  /**
   * Returns the size of the class when cast to a number.
   * @returns {number} The size of the class.
   */
  valueOf() {
    return this._size;
  }

  /**
   * Returns the location of the class when cast to a string.
   * @returns {string} The location of the class.
   */
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
