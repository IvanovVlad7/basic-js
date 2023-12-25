const { NotImplementedError } = require('../extensions/index.js');

function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  const additionString = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);
  const repeatedString = new Array(repeatTimes).fill(String(str) + additionString).join(separator);

  return repeatedString;
}

module.exports = {
  repeater
};