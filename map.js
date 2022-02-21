//function map creates a new function when given an array and
//the new array is based on the conditions set by the callback function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);

console.log(results1);

const results2 = map(words, word => word[word.length - 1]);

console.log(results2);

module.exports = map;

