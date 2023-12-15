// == Equality
// === Strict Equality

const first = 2;
const second = '2';
if (first === second) {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}

// In JavaScript, the double equals (==) and triple equals (===) are
// comparison operators used to compare values. However, they behave
// differently in terms of type coercion.



// == Equality

// This operator checks to see if two values are equivalent. Returns a boolean value.
// Unlike the strict equality operator (===), this operator ignores the type
// and focuses exclusively on the value.

// The double equals operator performs type coercion,
// which means it tries to convert the operands
// to the same type before making the comparison.

// For example, the number 2 is considered equivalent to the string "2".

// The numbers are different, so they aren't equal
console.log(10 == 11); // false

// The numbers are the same, so it is equal!
console.log(10 == 10); // true

// The value matches, regardless of type
console.log(10 == '10'); // true

// 5 == "5" // true, because JavaScript coerces the string "5" to a number before comparison
// 1 == true // true, because JavaScript coerces the boolean true to the number 1



// ==================================================



// === Strict Equality

// This operator checks to see if two values are equivalent. Returns a boolean value.
// Unlike the equality operator (==), this operator checks the type as well as the value.
// For example, the number 2 is not considered equivalent to the string "2".

// The numbers are different, so they aren't equal
console.log(10 === 11); // false

// The numbers are the same, so it is equal!
console.log(10 === 10); // true

// The values are the same, but the type is different
console.log(10 === '10'); // false

// 5 === "5" // false, because the types are different (number vs. string)
// 1 === true // false, because the types are different (number vs. boolean)