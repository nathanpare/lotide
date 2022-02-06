const eqObjects = function(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false
  for (let key in a) { 
  if (a[key] !== b[key]) {
      return false
    }
  } 
  return true;
};

let object1 = {name: "Nathan"};
let object2 = {name: "Nathan"};

console.log(eqObjects(object1, object2));