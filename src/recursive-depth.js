const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let maxDepth = depth;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const currentDepth = this.calculateDepth(arr[i], depth + 1);
        maxDepth = Math.max(maxDepth, currentDepth);
      }
    }

    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};