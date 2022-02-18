const eqArrays = require("./eqArrays");

const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(object1, object2) {
  if (eqObjects(object1, object2)) {
    return (`✅✅✅ Assertion Passed: ${object1} === ${object2}`);
  } else {
    return (`🚫🚫🚫 Assertion Failed: ${object1} !== ${object2}`);
  }
};

module.exports = assertObjectsEqual;
