const capitalize = require('./capitalize');

it('canada should be Canada', () => {
  expect(capitalize('canada')).toBe('Canada');
});