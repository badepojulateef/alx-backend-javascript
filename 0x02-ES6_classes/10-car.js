/**
 * Represents a Car object with brand, motor, and color properties.
 */
export default class Car {
  /**
   * Create a new Car instance.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The type of motor in the car.
   * @param {string} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Create a clone of the current Car instance.
   * @returns {Car} A new Car instance with the same brand, motor, and color.
   */
  cloneCar() {
    // Create a new instance of the same class with the current property values.
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
