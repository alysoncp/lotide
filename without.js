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


const without = function(array, remove) {
  let baseArray = array;
  let stepArray = [];
  for (let item of remove) {
    stepArray = [];
    for (let elm of baseArray) {
      if (elm !== item) {
        stepArray.push(elm);
      }
    }
    /* DEBUG STATEMENTS
    console.log(`baseArray: ${baseArray} with length: ${baseArray.length}`)
    console.log(`stepArray: ${stepArray} with length: ${stepArray.length}`)*/
    if (stepArray.length < baseArray.length) {
      baseArray = stepArray;
    }
  }

  return baseArray;

};

console.log(without([1, 2, 3], [1]));// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3", "2"])); // => ["1", "2"]
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;