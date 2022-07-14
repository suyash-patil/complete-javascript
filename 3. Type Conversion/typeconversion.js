let value = true;
console.log(typeof value); // boolean
value = String(value);
console.log(typeof value); // string

// Automatic numerical conversion

console.log("6" / "2"); // 3
console.log("6" / 2);   // 3
console.log(6 / "2");   // 3


value = undefined;
console.log(Number(value)); // NaN
value = null;
console.log(Number(value)) // 0


// Boolean conversion

value = 6;
console.log(Boolean(value)); // True
console.log(Boolean(0)); // False
console.log(Boolean('')); // False
console.log(Boolean('0')); // True
