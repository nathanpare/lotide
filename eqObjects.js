const eqArrays = require("./eqArrays");
//function eqObjects checks that two given objects deeply equal
//one another
const eqObjects = function(firstObj, secondObj) {
  if (Object.keys(firstObj).length !== Object.keys(secondObj).length) return false;
  for (let key in firstObj) {
    if (!secondObj[key]) {
      return false;
    }
    if (Array.isArray(firstObj[key])) {
      const result = eqArrays(firstObj[key],secondObj[key]);
      if (!result) {
        return false;
      }
    } else if (firstObj[key] !== secondObj[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;