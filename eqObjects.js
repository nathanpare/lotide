const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;