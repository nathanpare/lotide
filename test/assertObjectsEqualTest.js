const assertObjectsEqual = require("../assertObjectsEqual");
const eqArrays = require("../eqArrays");
const eqObjects = require("../eqObjects");

let object1 = {name: "Nathan", age: 22, friends: [1,2,3]};
let object2 = {name: "Nathan", age: 22, friends: [1,2,3]};

console.log(assertObjectsEqual(object1, object2), true);