/**
 * Creates a budget object for the current year with income, GDP, and capita properties.
 *
 * @param {number} income - The income value for the current year.
 * @param {number} gdp - The GDP value for the current year.
 * @param {number} capita - The capita value for the current year.
 * @returns {Object} A budget object with computed property names based on the current year.
 */
function getBudgetForCurrentYear(income, gdp, capita) {
  /**
   * Returns the current year as a four-digit number.
   *
   * @returns {number} The current year.
   */
  function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  // Create a budget object with computed property names.
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  // Return the budget object.
  return budget;
}

export default getBudgetForCurrentYear;
