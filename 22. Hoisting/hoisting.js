// All the function and variables are hoisted to the top


greet();

function greet() {
  console.log('Hello');
}

// Function is called even before it was declared. It is because all the variables and functions are moved to the top. The underlying reason is that javascript runs in 2 phases. In the first phase, which is memory allocation phase where each varaible and functions are assigned memory. The 2nd phase is execution phase.

console.log(a); // undefined because no value allocated only memory is allocated

var a = 6;

// Var is moved to the top. But wait, isn't the case with let and const would be similar. No!! let and const behaves differently. Here is the code

/*
console.log(b);

let b = 7; // Error

*/

// Concept of temporal dead zone. It is the zone between hoisting and initialization.

console.log(c);

let c = 5;

// The zone between line 27 and 29 is temporal dead zone and error is that we cant access c before initialization.
