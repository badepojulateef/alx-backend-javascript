/**
 * Calculates the sum of three numbers: the initial number, the expansion in 1989,
 * and the expansion in 2019. You can specify default values for the expansions.
 *
 * @param {number} initialNumber - The initial number.
 * @param {number} [expansion1989=89] - The expansion in 1989 (default is 89).
 * @param {number} [expansion2019=19] - The expansion in 2019 (default is 19).
 * @returns {number} The sum of the initial number, expansion1989, and expansion2019.
 */
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  // Calculate the sum of the initial number and the two expansions.
  return initialNumber + expansion1989 + expansion2019;
}
