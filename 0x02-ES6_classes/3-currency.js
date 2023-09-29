/**
 * Represents a currency.
 */
class Currency {
  /**
   * Creates a new Currency instance.
   * @param {string} code - The currency code (e.g., "$" for dollars).
   * @param {string} name - The name of the currency (e.g., "Dollars").
   * @throws {TypeError} If the attributes are of invalid types.
   */
  constructor(code, name) {
    this._code = ''; // Initialize to an empty string
    this._name = ''; // Initialize to an empty string

    this.code = code; // Use the setter for type validation
    this.name = name; // Use the setter for type validation
  }

  /**
   * Gets the currency code.
   * @returns {string} The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the currency code.
   * @param {string} value - The new currency code.
   * @throws {TypeError} If the value is not a string.
   */
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  /**
   * Gets the currency name.
   * @returns {string} The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the currency name.
   * @param {string} value - The new currency name.
   * @throws {TypeError} If the value is not a string.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Displays the currency information in the specified format.
   * @returns {string} The currency information in the format "name (code)".
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
