

const middle = function(array) {
  let output = [];
  let index = 0;
  // If long enough to have a middle
  if (array.length > 2) {
    //If Even
    if (array.length % 2 === 0) {
      index = array.length / 2;
      output = [array[index], array[index + 1]];
    //If Odd
    } else {
      index = Math.floor(array.length / 2);
      output = [array[index]];
    }
  }

  return output;
};

console.log(middle([1, 2, 3])); // => [2]


module.exports = middle;