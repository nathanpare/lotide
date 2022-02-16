const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return (`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return (`🚫🚫🚫 Assertion Failed: ${array1} !== ${array2}`);
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

