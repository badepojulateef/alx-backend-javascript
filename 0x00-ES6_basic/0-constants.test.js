// eslint-disable-next-line import/extensions
import { getLast, taskFirst, taskNext } from './0-constants.js';

describe('task 0, case 0', () => {
  it('carry out first task', () => {
    expect.assertions(1);
    expect(taskFirst()).toBe('I prefer const when I can.');
  });
});

describe('task 0, case 1', () => {
  it('carry out another task', () => {
    expect.assertions(1);
    expect(getLast()).toBe(' is okay');
  });
});

describe('task 0, case 2', () => {
  it('carry out first task', () => {
    expect.assertions(1);
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
