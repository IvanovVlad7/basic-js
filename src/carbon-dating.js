const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN2 = 0.693;

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || isNaN(parseFloat(sampleActivity)) || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > MODERN_ACTIVITY) {
    return false;
  }

  const activity = parseFloat(sampleActivity);
  const k = LN2 / HALF_LIFE_PERIOD;
  const age = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k);

  return age;
}

module.exports = {
  dateSample
};