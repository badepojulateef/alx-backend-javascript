/**
 * Represents a pricing with an amount and currency.
 */
class Pricing {
  /**
   * Creates a new Pricing instance.
   * @param {number} amount - The price amount.
   * @param {Currency} currency - The currency used for the price.
   * @throws {TypeError} If the attributes are of invalid types.
   */
  constructor(amount, currency) {
    this._amount = 0; // Initialize to 0
    this._currency = null; // Initialize to null

    this.amount = amount; // Use the setter for type validation
    this.currency = currency; // Use the setter for type validation
  }

  /**
   * Gets the price amount.
   * @returns {number} The price amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the price amount.
   * @param {number} value - The new price amount.
   * @throws {TypeError} If the value is not a number.
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  /**
   * Gets the currency.
   * @returns {Currency} The currency used for the price.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency.
   * @param {Currency} value - The new currency for the price.
   * @throws {TypeError} If the value is not an instance of Currency.
   */
  set currency(value) {
    this._currency = value;
  }

  /**
   * Displays the price information in the specified format.
   * @returns {string} The price information in the format "amount currency_name (currency_code)".
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Converts a price amount using a conversion rate.
   * @param {number} amount - The price amount to be converted.
   * @param {number} conversionRate - The conversion rate.
   * @returns {number} The converted price amount.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
