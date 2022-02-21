const eqArrays = require('./eqArrays');
//assertion test for arrays.
//checks to make sure that two arrays are strictly equal
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;

