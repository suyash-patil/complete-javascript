// We can instanciate an object by using "new" operator

let person = new Object({name: 'John', age: 20});
console.log(person);

// Constructor function

function Details(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

let detail = new Details("Depp", 30, 'USA');
console.log(detail);

// We can also declare object like this

let user = new function () {
  this.name = "Jack";
  this.isAdmin = false;
};

console.log(user);