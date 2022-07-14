// There are 8 types of primitive data types

// 1. Number

let num = 123456;
console.log(num);
num = num / 2; // Arithmetic operations
console.log(num);

// Special numerical types

console.log(1/0); // Infinity
console.log(-1/0); // -Infinity
console.log("hello"/2); // NaN (not a number)
console.log(NaN ** 0); // Special case where 1 is printed, otherwise NaN is propagated till the last operation


// 2. BigInt

/* To represent number greater than 2^53 - 1, bigint is used. We have to append 'n' at the end of the number to declare it as BigInt.
*/

let bignumber = 1234324242424454544n;
console.log(bignumber);
bignumber += BigInt(2);
console.log(bignumber);