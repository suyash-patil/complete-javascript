// Functions are piece of code that performs same code without being repetitively write it

/* Structure

function function_name(parameter1, parameter2, ... parameterN) {
  ...body
}

*/

function printHello() {
  console.log('Hello');
} // This is function declaration

// To execute the code we need to call it, to call the function we can do

printHello();

// Variables declared inside a function can only be used inside the functions, these are known as local variables

function sum(a, b) {
  let c = a + b;
  console.log(c);
}

sum(4, 6);
// console.log(c); // C is not defined as c can be accessed inside the sum function

// A function can access outer variables though

let d = 6;
function add(a,b) {
  let c = a + b + d;
  console.log(c);
}

add(6,7); // d can be accessed inside function add

// Arguments

// the values that are passed as a function parameter are called arguments, in the above code 6 and 7 are arguments

// Default parameters

function add(a, b = 8) {
  console.log(a + b);
}

add(5,6);
add(6); // B will be 8 as we have not given b in arguments


// Just like other languages we can also return a value from a function in JS

function add(a, b, c) {
  return a + b + c;
}

d = add(5,6,7);
console.log(d); // 18