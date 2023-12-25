const { NotImplementedError } = require('../extensions/index.js');

function getEmailDomain(email) {
  const parts = email.split('@');
  return parts[parts.length - 1];
}

module.exports = {
  getEmailDomain
};