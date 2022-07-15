// To traverse through keys in an object we can use for..in loop

let person = {
  name: 'John',
  age: 20,
  isAdmin: 'true',
};

for(key in person) {
  console.log(key);
}

// We can also iterate over strings like this to get the index

let a = 'HelloWorld';

for(idx in a) {
  console.log(idx); // This will print all the indices
}