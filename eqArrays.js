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

module.exports = eqArrays;