const assertObjectsEqual = require("../assertObjectsEqual");

let object1 = {name: "Nathan", age: 22, friends: [1,2,3]};
let object2 = {name: "Nathan", age: 22, friends: [1,2,3]};
let object3 = {Pet: "Bolt", type: "dog", age: 8};
let object4 = {Pet: "Bolt", type: "dog", age: 8};
assertObjectsEqual(object1, object2);
assertObjectsEqual(object3, object4);