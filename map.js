const assertArraysEqual = function(actual, expected) {
  
  if (actual.length === expected.length) {
    let match = true;
    let x = 0;
    while (x < actual.length) {
      if (actual[x] !== expected[x]) {
        match = false;
      }
      x++;
    }

    if (match) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    }
    
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//-------------------------


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

module.exports = map;