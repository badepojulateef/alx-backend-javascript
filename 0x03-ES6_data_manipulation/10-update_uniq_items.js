/**
 * Update the quantity of items with an initial quantity of 1 to 100 in the given map.
 * @param {Map} groceryMap - The map of groceries.
 * @throws {Error} Throws an error if the argument is not a map.
 */
function updateUniqueItems(groceryMap) {
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of groceryMap) {
    if (quantity === 1) {
      groceryMap.set(item, 100);
    }
  }
}

export default updateUniqueItems;
