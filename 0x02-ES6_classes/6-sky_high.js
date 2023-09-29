import Building from './5-building';

/**
 * Represents a high-rise building that extends the abstract Building class.
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates a new SkyHighBuilding instance.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);

    /**
     * The number of floors in the building.
     * @type {number}
     * @private
     */
    this._floors = floors;
  }

  /**
   * Gets the number of floors in the building.
   * @returns {number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Sets the number of floors in the building.
   * @param {number} value - The new number of floors.
   */
  set floors(value) {
    this._floors = value;
  }

  /**
   * Provides an evacuation warning message for the high-rise building.
   * @returns {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
