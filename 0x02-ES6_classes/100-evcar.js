/**
 * Represents an Electric Vehicle (EV) Car that extends the Car class.
 */
import Car from './10-car';

export default class EVCar extends Car {
  /**
   * Create a new EVCar instance.
   * @param {string} brand - The brand of the EV car.
   * @param {string} motor - The type of motor in the EV car.
   * @param {string} color - The color of the EV car.
   * @param {number} range - The range (in miles) of the EV car on a single charge.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /**
   * Create a clone of the current EVCar instance. Note that this method overrides
   * the cloneCar method from the parent Car class.
   * @returns {EVCar} A new EVCar instance with the same brand, motor, color, and range.
   */
  cloneCar() {
    // Create a new instance of the same class with the current property values.
    return new EVCar(this._brand, this._motor, this._color, this._range);
  }
}
