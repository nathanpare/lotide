const eqObjects = require("../eqObjects");
const assert = require('chai').assert;

let object1 = {name: "Nathan", age: 22, friends: [1,2,3]};
let object2 = {name: "Nathan", age: 22, friends: [1,2,3]};
let object3 = {name: "Nathan", age: 22, friends: [1,2,3]};
let object4 = {name: "Mason", age: 32, friends: [1,2]};

describe("#eqObjects", () => {
  it("returns true for (object1, object2)", () => {
    assert.deepEqual(eqObjects(object1, object2), true);
  });

  it("returns false for (object3, object4)", () => {
    assert.deepEqual(eqObjects(object3, object4), false);
  });
});