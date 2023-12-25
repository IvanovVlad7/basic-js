const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const filteredNames = members.filter(member => typeof member === 'string');

  const initials = filteredNames.map(name => name.trim()[0].toUpperCase());
  
  return initials.sort().join('');
}

module.exports = {
  createDreamTeam
};