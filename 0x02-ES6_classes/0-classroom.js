/**
 * Represents a classroom with a maximum student capacity.
 */
export default class ClassRoom {
  /**
   * Creates a new classroom instance.
   * @param {number} maxStudentsSize - The maximum number of students the classroom can hold.
   */
  constructor(maxStudentsSize) {
    /**
     * The maximum number of students the classroom can hold.
     * @type {number}
     * @private
     */
    this._maxStudentsSize = maxStudentsSize;
  }
}
