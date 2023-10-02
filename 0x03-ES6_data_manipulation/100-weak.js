const weakMap = new WeakMap();

/**
 * Query an API with an endpoint and track the number of times it's called.
 * @param {Object} endpoint - The API endpoint to query.
 * @throws {Error} Throws an error if the number of queries is >= 5.
 */
function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const currentCount = weakMap.get(endpoint);
    if (currentCount >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, currentCount + 1);
  }
}

export { queryAPI, weakMap };
