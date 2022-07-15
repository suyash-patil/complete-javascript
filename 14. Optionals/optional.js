// Optional chaining is denoted by '?.'
// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

let person = {};

// console.log(person.address.city); // Error as no address property in person

console.log(person?.address?.city); // It will stop before address
console.log(person.getAge?.()); // No function with getAge
