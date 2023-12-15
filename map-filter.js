const numbers = [3, 4, 5, 6, 7, 8];

// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);


// function square(element) {
//     return element * element;
// }
// const res = numbers.map(square);
// console.log(res);


// numbers.map(function (element, index, array) {
//     console.log(element, index, array);
// });
// Parameter 1. element show value
// Parameter 2. index show index number of value
// Parameter 3. array show full array


// const result = numbers.map(function (element) {
//     return element * element;
// });
// console.log(result);

const result = numbers.map(number => number * number);
console.log(result);


// ==================================================


const bigger = numbers.filter(number => number > 5);
console.log(bigger);