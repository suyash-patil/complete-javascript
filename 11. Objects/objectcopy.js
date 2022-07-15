// All the primitives are copied by value but objects are copied by reference, means that if we change the copy of an object, then the original object will also get changed

let message = 'Hello';
let msgCopy = message;
msgCopy += 'World';
console.log(message);
console.log(msgCopy); // Both are different because they are pass by value

let person = {
  name: 'John',
  age: 20,
  isAdmin: true,
};

let personCopy = person;
personCopy.age = 30;
console.log(person.age); // 30, pass by reference
console.log(personCopy.age); // 30, pass by reference