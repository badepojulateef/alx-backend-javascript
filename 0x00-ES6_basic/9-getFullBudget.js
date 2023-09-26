/**
 * Creates a full budget object with income, GDP, capita properties and
 * methods to convert income to different currencies.
 *
 * @param {number} income - The income value.
 * @param {number} gdp - The GDP value.
 * @param {number} capita - The capita value.
 * @returns {Object} A full budget object with properties and methods.
 */
import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  // Create a budget object using the provided function.
  const budget = getBudgetObject(income, gdp, capita);

  // Create a full budget object with ES6 method properties.
  const fullBudget = {
    ...budget,

    /**
     * Get the income value formatted in dollars.
     *
     * @param {number} income - The income value.
     * @returns {string} The income value in dollars.
     */
    getIncomeInDollars(income) {
      return `$${income}`;
    },

    /**
     * Get the income value formatted in euros.
     *
     * @param {number} income - The income value.
     * @returns {string} The income value in euros.
     */
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  // Return the full budget object.
  return fullBudget;
}
