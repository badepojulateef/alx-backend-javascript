/**
 * Guardrail function that executes a mathFunction and appends its result or error to a queue.
 *
 * @param {Function} mathFunction - The math function to execute.
 * @returns {Array} An array containing the result or error messages and a processing message.
 */
export default function guardrail(mathFunction) {
  const queue = [];
  
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  
  return queue;
}
