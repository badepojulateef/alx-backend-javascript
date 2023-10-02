/**
 * Create a map of groceries with name and quantity.
 * @returns {Map} A map of groceries.
 */
function groceriesList() {
  const groceryMap = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return groceryMap;
}

export default groceriesList;
