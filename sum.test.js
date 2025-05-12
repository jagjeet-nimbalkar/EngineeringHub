// sum.test.js
const sum = require('./sum'); // Importing the function

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3); // This should work correctly
});
