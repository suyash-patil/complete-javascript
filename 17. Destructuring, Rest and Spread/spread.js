// Spread operator converts the list into individual elements

console.log(Math.max(1,2,3)); // Works fine

let arr = [1,3,7,4,2];

// console.log(Math.max(arr)); // NaN

console.log(Math.max(...arr)); // it converts whole list into individual elements
