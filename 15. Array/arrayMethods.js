// Filter Method

let arr = [1,2,3,4,5,6];

let even = (arr.filter((val) => val%2 == 0));

console.log(even);


// Sort Method

arr = [1,2,4,16];

arr.sort();
console.log(arr); // it assumes string

arr.sort((a, b) => a - b);

console.log(arr);

// Map Method

arr = [1,2,3,4,5];

let multipleOf2 = arr.map((val, idx) => val *= 2);

console.log(multipleOf2);

// Reverse Method

arr.reverse();
console.log(arr);

// Split method

let str = "Apples, Bananas, Grapes";

let fruits = str.split(", ");

for(fruit of fruits) console.log(fruit);

// Reduce Method

// They are used to calculate a single value based on all the elements of the array

let value = arr.reduce((acc, item, idx) => {
  return acc = acc * item;
}, 1); // Product of all the elements

console.log(value);
