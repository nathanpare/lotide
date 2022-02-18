const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const data1 = [1, 2, 5, 7, 8, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
}
// function myCallback(x) {
//    return x < 0
//  }

//const myOtherCallback = x => {return x < 0}

const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ",");

console.log(assertArraysEqual([ 1, 2, 5, 7, 8 ], takeUntil(data1, x => x < 0)));
console.log(assertArraysEqual([ "I've", 'been', 'to', 'Hollywood' ], takeUntil(data2, x => x === ",")));

module.exports = takeUntil;