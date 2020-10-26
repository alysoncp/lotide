// Function for checking answer
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} ${expected}`);
  }
};

const tail = function(array) {
  let newArray = [];
  for (let x = 1; x < array.length; x++) {
    newArray.push(array[x]);
  }
  return newArray;
};



const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);