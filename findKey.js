// -----------------------------
// Required Functions

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


//------------------------------
// CODE

const findKey = function(data, callback) {
  for (const elm in data){
    if (callback(data[elm])) {
      return elm;
    }
  }
}

//------------------------------
// Example execution

const galaxy = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

results1 = findKey(galaxy, x => x.stars === 2)
assertEqual(results1, "noma");

results2 = findKey(galaxy, x => x.stars === 5)
assertEqual(results2, undefined);

results3 = findKey(galaxy, x => x.stars === 3)
assertEqual(results3, "Akaleri");


module.exports = findKey;