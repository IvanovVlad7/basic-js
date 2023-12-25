const { NotImplementedError } = require('../extensions/index.js');

function renameFiles(names) {
  const result = [];
  const count = {};

  for (let i = 0; i < names.length; i++) {
    if (!count[names[i]]) {
      count[names[i]] = 1;
      result.push(names[i]);
    } else {
      let newName = `${names[i]}(${count[names[i]]})`;
      while (count[newName]) {
        count[names[i]]++;
        newName = `${names[i]}(${count[names[i]]})`;
      }
      count[newName] = 1;
      result.push(newName);
      count[names[i]]++;
    }
  }

  return result;
}

module.exports = {
  renameFiles
};