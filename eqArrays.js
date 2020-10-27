const eqArrays = function(actual, expected) {
  
  if (actual.length === expected.length) {
    let x = 0;
    while (x < actual.length) {
      if (actual[x] !== expected[x]) {
       return false
      }
      x++;
    }
    
  } else {
    return false;
  }

  return true;
};

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])); // => false
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false