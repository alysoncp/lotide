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
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length === object2Keys.length) {
    for (const key of object1Keys) {
      if (!object2[key]) {
        return false;
      } else {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const ac = { a: "1", c: "3" };
assertEqual(eqObjects(ab, ac), false); // => false

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;