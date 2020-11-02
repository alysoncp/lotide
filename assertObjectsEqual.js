const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  
  if (actual.length === expected.length) {
    let x = 0;
    while (x < actual.length) {
      if (actual[x] !== expected[x]) {
        return false;
      }
      x++;
    }
    
  } else {
    return false;
  }

  return true;
};



// Check if two object are equal regardless of key order
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length === object2Keys.length) {
    for (const key of object1Keys) {
      if (!object2[key]) {
        console.log(`❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
        return false;
      } else {
        if (!eqArrays(object1[key], object2[key])) {
          console.log(`❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
          return false;
        }
      }
    }
  } else {
    console.log(`❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
    return false;
  }
  console.log(`✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const ac = { a: "1", c: "3" };
assertObjectsEqual(ab, ac); // => false

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

module.exports = assertObjectsEqual;