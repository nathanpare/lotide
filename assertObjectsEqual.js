const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return (`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false
  for (let key in a) { 
  if (!b[key]) {
      return false
    }
  if (Array.isArray(a[key])) {
    const result = eqArrays(a[key],b[key]);
    if (!result) {
      return false;
    } 
  } else if (a[key] !== b[key]) {
    return false;
  }
  } 
  return true;
};

let object1 = {name: "Nathan", age: 22, friends: [1,2,3]};
let object2 = {name: "Nathan", age: 22, friends: [1,2,3]};
let object3 = {name: "Nathan", age: 32, friends: [1,2,3]}; 
let object4 = {name: "Nathan", friends: [1,2,3]}; 

console.log(assertEqual(eqObjects(object1, object2), true));
console.log(assertEqual(eqObjects(object1, object3), false));
console.log(assertEqual(eqObjects(object1, object4), false));
