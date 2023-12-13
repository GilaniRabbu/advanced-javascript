// In JavaScript, null is a special value that represents the intentional absence of
// any object value or the absence of a value altogether.
// It is a primitive value, like undefined,
// but it is explicitly assigned by a programmer to indicate that
// a variable does not refer to any object, array, or value.


// Explicit Assignment
// You can explicitly assign the value null to a variable.
let myVariable = null;
console.log(myVariable); // null


// Type of Null
console.log(typeof null); // object
// The typeof operator incorrectly returns "object" for null.
// This is a long-standing quirk in JavaScript and is considered a historical mistake.


// Comparison with Undefined
let undefinedValue;
let nullValue = null;
console.log(undefinedValue == nullValue); // true


// As an Argument to Clear Object References
let myObject = {
    data: "some data"
};
// Clearing the reference to the object
myObject = null;
console.log(myObject); // null



// ==================================================



// In JavaScript, the term "undefined" is a primitive value
// that is automatically assigned to variables that have been declared
// but not yet initialized or assigned a value.
// It indicates the absence of a meaningful value.


// Implicitly Assigned Undefined
// 'age' is declared but not assigned a value so its default value is 'undefined'.
let age;
console.log(age); // undefined


// Explicitly Assigning Undefined
let value = undefined;
console.log(value); // undefined


// If a function does not have a return statement
function add(num1, num2) {
    console.log(num1 + num2); // 22
    // No return statement
}
const result = add(15, 7);
console.log(result); // undefined


// If a function is called without providing a value for its parameters
function addNumber(num1, num2) {
    console.log(num1, num2); // 5 undefined
}
console.log(addNumber(5)); // undefined


// Accessing Non-existent Object Properties
// When you try to access a property that doesn't exist in an object
const info = {
    name: "Max",
    phone: 654123
}
console.log(info.age); // undefined


// Array Elements
// Accessing an index that is beyond the length of an array
let arr = [1, 2, 3];
console.log(arr[3]); // undefined