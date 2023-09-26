/**
 * Creates a budget object with income, GDP, and capita properties.
 *
 * @param {number} income - The income value.
 * @param {number} gdp - The GDP value.
 * @param {number} capita - The capita value.
 * @returns {Object} A budget object with income, GDP, and capita properties.
 */
export default function getBudgetObject(income, gdp, capita) {
  // Create a budget object with properties using the same names as the parameters.
  const budget = {
    income,
    gdp,
    capita,
  };

  // Return the budget object.
  return budget;
}
