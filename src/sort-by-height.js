const { NotImplementedError } = require('../extensions/index.js');

function sortByHeight(arr) {
  const heights = arr.filter(height => height !== -1).sort((a, b) => a - b);
  let index = 0;

  return arr.map((value) => {
    return value === -1 ? value : heights[index++];
  });
}

module.exports = {
  sortByHeight
};