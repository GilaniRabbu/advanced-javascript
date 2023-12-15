// Find Method
// The find method is an array method introduced in ECMAScript 2015 (ES6).
// It returns the first element in the array that satisfies the provided testing function.
// Otherwise, it returns undefined.
var numArray = [15, 20, 25, 30, 35, 40, 45, 50];
var find = numArray.find(value => value < 35);
console.log(find);



// ForEach Method
// The forEach method is an array method in JavaScript
// that iterates over each element in an array and
// executes a provided function once for each array element.

// The forEach() method is not executed for empty elements.

var numArray = [55, 58, 60, 65, 72, 78, 80, 90];

numArray.forEach(item => console.log(item));