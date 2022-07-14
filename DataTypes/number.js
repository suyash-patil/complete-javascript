let num = 123456;
console.log(num);
num = num / 2; // Arithmetic operations
console.log(num);

// Special numerical types

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log("hello" / 2); // NaN (not a number)
console.log(NaN ** 0); // Special case where 1 is printed, otherwise NaN is propagated till the last operation