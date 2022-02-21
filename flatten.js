//function flatten converts any number of nested arrays into one array
const flatten = function(arr) {
  return [].concat(...arr);
};

module.exports = flatten;