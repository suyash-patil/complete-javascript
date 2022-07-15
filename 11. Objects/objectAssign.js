// If we want to make a copy of an object we can use Object.assign method to create a duplicate

let person = {
  name: 'John',
  age: 20,
  isAdmin: true,
};

let personCopy = {};

Object.assign(personCopy, person);
personCopy.age = 30;
console.log(personCopy); // Pass by value
console.log(person);