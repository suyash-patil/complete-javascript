// It implies that a variable is not assigned a value yet. We should not assign undefined to a variable as it is not recommended.

let name;
console.log(name); // Since value is not assigned
name = "John";
console.log(name);

let age = undefined; // Not recommended