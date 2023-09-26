/**
 * This function takes a boolean value and returns an array with two boolean values.
 * If the input `trueOrFalse` is true, it sets the first value to true and the second
 * value to false. Otherwise, it sets both values to their default values (false).
 *
 * @param {boolean} trueOrFalse - A boolean value that determines the state of the returned values.
 * @returns {Array} An array containing two boolean values.
 */
export default function taskBlock(trueOrFalse) {
  // Initialize two boolean variables with default values.
  let task = false;
  let task2 = true;

  // Check the input value `trueOrFalse`.
  if (trueOrFalse) {
    // If `trueOrFalse` is true, update the values accordingly.
    task = true;
    task2 = false;
  }

  // Return an array with the boolean values.
  return [task, task2];
}
