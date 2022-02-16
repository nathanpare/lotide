const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return (`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return (`🚫🚫🚫 Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;

