const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
  let count = 0;

  // Перебираем каждый элемент матрицы
  for (let row of matrix) {
    for (let item of row) {
      // Проверяем, содержит ли элемент строку '^^'
      if (item === '^^') {
        count++;
      }
    }
  }

  return count;
}

module.exports = {
  countCats
};