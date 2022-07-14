let x = 2 * 2 + 1; // First computations occurs then value is stored
console.log(x);

// = returns a value

let a = 1;
let b = 2;
let c = 3 - (a = b - 1); // (a = b - 1) returns 1 and 3-1 = 2
console.log(c); // 2

//Chained assignment evaluate from right to left

a = b = c = 2 + 2;
console.log(a); // 4

// += and -=
x = x + 2;
console.log(x);
x += 2; // Shorthand
console.log(x);

// Increment and Decrement operator

let counter = 3;
console.log(counter++); // value increases after this line
console.log(counter); // value increased to 4
console.log(++counter); // value increased in this line only