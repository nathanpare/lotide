//function letterPositions returns all the indexes
//of each character of a given string
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let currentLetter = sentence[i];
    if (results[currentLetter] === undefined) {
      results[currentLetter] = [i];
    } else {
      results[currentLetter].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;