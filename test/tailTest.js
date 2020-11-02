const tail = require('../tail');
const assertEqual = require('../assertEqual')

//TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);