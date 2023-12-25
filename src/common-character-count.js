const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
  const count = {};

  // Подсчитываем количество символов в первой строке
  for (let char of s1) {
    count[char] = (count[char] || 0) + 1;
  }

  let commonCount = 0;

  // Проверяем количество общих символов во второй строке
  for (let char of s2) {
    if (count[char] > 0) {
      commonCount++;
      count[char]--;
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};