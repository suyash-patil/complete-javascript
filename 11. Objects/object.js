// Object contains key value pair and is intiated by {..}

let obj = new Object();

const person = {
  "name": 'John',
  age: 20,
}; // const or let doesn't effect as we can change the data inside it
// name and age are called as properties of the object. Properties can be accessed by dot(.) notation.

console.log(person.name);
// We can also brackets to access property value
console.log(person["age"]);
// we can add more properties by using dot or bracket notations
person.isAdmin = true;
person["address"] = "India";
console.log(person);
// To remove a property we can use delete operator
delete person.age;
console.log(person);

let fruit = 'apple';
let bag = {
  [fruit]: 5,
}
console.log(bag);

// WE can also test if a property exist in an object by using in operator

console.log('name' in person);