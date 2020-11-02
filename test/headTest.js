const head = require('../head');
const assertEqual = require('../assertEqual')

//Test code to call function
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");