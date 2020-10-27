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


//NEW CODE FOR LETTER IDEXES
const letterPositions = function(string) {
  let letterPosn = {};
  for (let x = 0; x < string.length; x++) {
    if (string[x] !== ' ') {
      if (letterPosn[string[x]]) {
        letterPosn[string[x]].push(x);
      } else {
        letterPosn[string[x]] = [x]
      }
    }
  }
  return letterPosn;
};

console.log(letterPositions("hello"));

const helloResult = { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] };

assertArraysEqual(letterPositions("hello"), helloResult);
