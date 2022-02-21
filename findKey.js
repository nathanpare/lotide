//function findKey finds the key and returns
//its value based on a given index
const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const findKey = function(object, callback) {
  for (let key in object) {
    const value = object[key]; //{ stars: 3 }
    if (callback(value))
      return key;
  }
  return undefined;
};

const results1 = findKey(object1, x => x.stars === 2);
console.log(results1);

module.exports = findKey;