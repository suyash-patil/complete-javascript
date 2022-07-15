// Array are used to store ordered collections. There are two ways to create array.

let arr = [];
arr = new Array();

arr = ["Apples", "Oranges", "bananas"];
console.log(arr);

for(val of arr) console.log(val);

// We can also access data at an index
console.log(arr[2]);

console.log(arr.length);
arr[3] = 3;
console.log(arr);

// We can also add element at any index, and js will put empty items between it;
arr[100] = "mango";
console.log(arr);
console.log(arr.length);

// Pop-push-shift-unshift

// push appends item at last, pop takes out item from last

arr.pop();
arr.shift(); // Shift whole array to left
arr.unshift("Plum"); // Add element to beginning

console.log(arr);