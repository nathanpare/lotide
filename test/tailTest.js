const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');


console.log(tail(["Yo Yo", "Lighthouse", "Labs"]));
console.log(assertArraysEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),[ 'Lighthouse', 'Labs' ]));