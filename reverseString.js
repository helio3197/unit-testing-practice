const reverseString = (string) => {
  return string ? reverseString(string.substr(1)) + string[0] : string;
};

module.exports = reverseString;