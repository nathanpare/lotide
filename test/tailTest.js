const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [ 'Lighthouse', 'Labs' ] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), [ 'Lighthouse', 'Labs' ]);
  });

  it("returns [ 2, 3 ] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [ 6, 7, 8 ] for [5, 6, 7, 8]", () => {
    assert.deepEqual(tail([5, 6, 7, 8]), [6, 7, 8]);
  });

  it("returns [ 'Love', 'Programming' ] for ['I', 'Love', 'Programming']", () => {
    assert.deepEqual(tail(['I', 'Love', 'Programming']), ['Love', 'Programming']);
  });
});