const { NotImplementedError } = require('../extensions/index.js');

function getDNSStats(domains) {
  const stats = {};

  for (let i = 0; i < domains.length; i++) {
    const domainParts = domains[i].split('.').reverse();
    let currentDomain = '';

    for (let j = 0; j < domainParts.length; j++) {
      currentDomain += `.${domainParts[j]}`;
      stats[currentDomain] = stats[currentDomain] ? stats[currentDomain] + 1 : 1;
    }
  }

  return stats;
}

module.exports = {
  getDNSStats
};