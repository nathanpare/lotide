const eqArrays = require("./eqArrays");

const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(object1, object2) {
  if (eqObjects(object1, object2)) {
    return (`✅✅✅ Assertion Passed: ${object1} === ${object2}`);
  } else {
    return (`🚫🚫🚫 Assertion Failed: ${object1} !== ${object2}`);
  }
};

let object1 = {name: "Nathan", age: 22, friends: [1,2,3]};
let object2 = {name: "Nathan", age: 22, friends: [1,2,3]};


console.log(assertObjectsEqual(object1, object2), true);

module.exports = assertObjectsEqual;
