const { NotImplementedError } = require('../extensions/index.js');

function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      let count = 0;

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (!(x === 0 && y === 0)) {
            const r = i + x;
            const c = j + y;
            if (r >= 0 && r < rows && c >= 0 && c < cols && matrix[r][c]) {
              count++;
            }
          }
        }
      }

      row.push(count);
    }
    result.push(row);
  }

  return result;
}

module.exports = {
  minesweeper
};