// 1st-Question
// An arrow function in JavaScript is a more concise way to write functions. It doesnot consists Function keyword. It was introduced in ES6 (ECMAScript 2015) and has a shorter syntax compared to traditional function expressions. Additionally, arrow functions have specific behavior with respect to the this keyword.

// The syntax of an arrow function differs significantly from a traditional function expression in JavaScript. Here’s a clear comparison:

// Arrow Function:

// Uses the => ("arrow") operator.
// Does not require the function keyword.
// Syntax is shorter and more concise.

var add = (a, b) => a + b;

// Traditional Function Expression:

// Uses the function keyword.
// Typically longer and more verbose.

const add = function(a, b) {
  return a + b;
};

// 2nd-Question
var add = (a,b) => (a+b)
console.log(add(2,3))

// 3rd-Question
var square = n => (n*n)
console.log(square(4))


// 4th-Question

// When an arrow function takes exactly one parameter, the parentheses around the parameter can be omitted.
// Syntax look likes this:

var y = num => num * 2;
console.log(y(3))

// Why parentheses might be omitted?

// When there is exactly one parameter, parentheses around the parameter are optional, because it makes the syntax more concise and easier to read. JavaScript allows this shorthand as a convenience. 
// However, if:

// There are zero parameters (e.g., () => ...), parentheses are required for an arrow function when there are no parameters.
// There are multiple parameters (e.g., (param1, param2) => ...)
// The parameter needs destructuring (e.g., ({key}) => ...)

// In these cases, parentheses are required because they improve clarity and ensure correct interpretation by the JavaScript engine.

// Example:
// Without parentheses (single parameter):

var greet = num => num + 5
console.log(greet(10))

// With parentheses (optional but valid):

var greet = (num) => num + 5
console.log(greet(10))

// Both work the same, but omitting parentheses is more consice, when possible.

// 5th-Question

// Concise Body
var cube = num => num**3
console.log(cube(2))

// Block Body
var cube = (num) => {
    return num**3
}
console.log(cube(2))

// 6th-Question
var sub = (a,b) => {
    return b-a
}
console.log(sub(10,20))


// 7th-Question
var message = () => {
    return "Hello, World"
}
console.log(message())