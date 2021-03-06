/**
 *  Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

function analizeScores(thresholds, categoryReport) {
  for (const category in categoryReport) {
    if (!Object.prototype.hasOwnProperty.call(thresholds, category)) {
      continue;
    }

    if (Number(categoryReport[category]) < Number(thresholds[category])) {
      return false;
    }
  }

  return true;
}

function analizeTotalScore(threshold, categoryReport) {
  for (const category in categoryReport) {
    if (Number(categoryReport[category]) < Number(threshold)) {
      return false;
    }
  }

  return true;
}

function analizeScore(categoryReport, thresholds) {
  let result;

  if (!thresholds || thresholds.length === 0) {
    throw new Error('Invalid threshold score.');
  }

  if (typeof thresholds === 'object') {
    result = analizeScores(thresholds, categoryReport);
  } else {
    result = analizeTotalScore(thresholds, categoryReport);
  }

  return result;
}

module.exports = analizeScore;
