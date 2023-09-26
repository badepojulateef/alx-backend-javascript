/**
 * Returns a constant task message.
 *
 * @returns {string} A constant task message.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * Returns the suffix " is okay."
 *
 * @returns {string} The suffix " is okay."
 */
export function getLast() {
  return ' is okay';
}

/**
 * Combines a dynamic message with the suffix from `getLast`.
 *
 * @returns {string} The combined message.
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
