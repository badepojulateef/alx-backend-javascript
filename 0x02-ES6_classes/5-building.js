/**
 * Represents an abstract building.
 */
export default class Building {
  /**
   * Creates a new Building instance.
   * @param {number} sqft - The square footage of the building.
   * @throws {Error} If a subclass of Building does not override the
   * evacuationWarningMessage method.
   */
  constructor(sqft) {
    /**
     * The square footage of the building.
     * @type {number}
     * @private
     */
    this._sqft = sqft;

    /**
     * @abstract
     * An abstract method that should be implemented by
     * subclasses to provide an evacuation warning message.
     * @returns {string} The evacuation warning message.
     * @throws {Error} Subclasses must implement this method.
     */
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  /**
   * Gets the square footage of the building.
   * @returns {number} The square footage.
   */
  get sqft() {
    return this._sqft;
  }
}
