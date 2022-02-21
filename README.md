# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nathanpare1999/lotide`

**Require it:**

`const _ = require('@nathanpare1999/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  eqArrays,
  eqObjects,
  head,
  tail,
  middle,
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without

  function descriptions:
  
  -assertEqual:
    assertion test similar to assert.equal function
    tests that your actual output equals the expected output
  -assertArraysEqual:
    assertion test for arrays.
    checks to make sure that two arrays are strictly equal
  -assertObjectsEqual:
    similar to AssertArraysEqual,
    this function checks that two given objects deeply equal one another
  -eqArrays:
    function eqArrays checks that two given arrays (arrayA) and (arrayB)
    are strictly equal to one another
  -eqObjects:
    function eqObjects checks that two given objects deeply equal
    one another
  -head:
    function head returns the first index of a given array
  -tail:
    function tail returns a new array including all indexes
    of the given array excluding the first index
  -middle:
    function middle return a new array including the middle index
    of the array if odd, if even it returns the two most center indexes
  -countLetters:
    function countLetters counts the amount of occurences of each
    character of the given string
  -countOnly:
    function countOnly counts the amount of amount of times
    that a subset of items (itemsToCount) occur in a given array
  -findKey:
    function findKey finds the key and returns
    its value based on a given index
  -findKeyByValue:
    function findKeyByValue finds and returns a key
    that matches a given value (value)
  -flatten:
    function flatten converts any number of nested arrays into one array
  -letterPositions:
    function letterPositions returns all the indexes
    of each character of a given string
  -map:
    function map creates a new function when given an array and
    the new array is based on the conditions set by the callback function
  -takeUntil:
    function takeUntil returns a new array of indexes until
    the callback condition
  -without:
    function without pushes a new array without
    the unwanted input included in that new array
