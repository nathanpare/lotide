const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);

console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));

const results2 = map(words, word => word[word.length - 1]);

console.log(assertArraysEqual(results2, [ 'd', 'l', 'o', 'r', 'm' ]));

module.exports = map;

