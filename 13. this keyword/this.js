// this keyword is used to access the properties of the object.

let person = {
  name: 'John',
  age: 20,
  getAge: function() {
    return this.age;
  },
}

console.log(person.getAge());

// Arrow function have no "this"
person = {
  name: 'Jack',
  age: 25,
  getAge: () => {
    return this.age;
  }
};

console.log(person.getAge()); // undefined as arrow function don't have binding to this.
