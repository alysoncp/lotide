const eqArrays = function(actual, expected) {
  
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
      console.log('true');
    } else {
      console.log('false');
    } 
    
  } else {
    console.log('false');
  }
};

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3, 4]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false