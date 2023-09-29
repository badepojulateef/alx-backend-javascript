/**
 * Represents an airport.
 */
class Airport {
  /**
   * Creates a new Airport instance.
   * @param {string} name - The name of the airport.
   * @param {string} code - The airport code.
   */
  constructor(name, code) {
    /**
     * The name of the airport.
     * @type {string}
     * @private
     */
    this._name = name;

    /**
     * The airport code.
     * @type {string}
     * @private
     */
    this._code = code;
  }

  /**
   * Gets the name of the airport.
   * @returns {string} The name of the airport.
   */
  get name() {
    return this._name;
  }

  /**
   * Gets the airport code.
   * @returns {string} The airport code.
   */
  get code() {
    return this._code;
  }

  /**
   * Returns the airport code when the object is converted to a string.
   * @returns {string} The airport code.
   */
  toString() {
    return `[${this._code}]`;
  }
}

export default Airport;
