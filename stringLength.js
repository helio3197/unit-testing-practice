const stringLength = (string) => {
  if (string.length > 0 && string.length <= 10) {
  return string.length;
  } else return new Error('String has to be 0 < length <= 10');
};

module.exports = stringLength;