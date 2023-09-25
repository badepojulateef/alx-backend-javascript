import { taskFirst, taskNext } from './0-constants.js';

test('carry out first task', () => {
  expect(taskFirst()).toBe('I prefer const when I can.');
});
