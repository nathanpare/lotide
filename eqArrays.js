const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return (`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (a,b) =>
a.length === b.length && a.every((v, i) => v === b[i]);

const a = [];
const b = [];

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));

