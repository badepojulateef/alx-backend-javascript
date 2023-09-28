/**
 * Divide the numerator by the denominator.
 *
 * @param {number} numerator - The numerator value.
 * @param {number} denominator - The denominator value.
 * @throws {Error} Throws an error if the denominator is equal to 0.
 * @returns {number} The result of the division.
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
