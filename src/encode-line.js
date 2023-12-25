const { NotImplementedError } = require('../extensions/index.js');

function encodeLine(str) {
  let encodedStr = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      encodedStr += (count > 1 ? count : '') + str[i];
      count = 1;
    }
  }

  return encodedStr;
}

module.exports = {
  encodeLine
};