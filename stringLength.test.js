const stringLength = require('./stringLength');

it('Character count of "test" is 4', () => {
  expect(stringLength('test')).toBe(4);
});

it('String count of "stringtoolong" show throw error (String has to be 0 < length <= 10)', () => {
  expect(stringLength('stringtoolong')).toStrictEqual(new Error('String has to be 0 < length <= 10'));
});

it('String count of "" show throw error (String has to be 0 < length <= 10)', () => {
  expect(stringLength('')).toStrictEqual(new Error('String has to be 0 < length <= 10'));
});