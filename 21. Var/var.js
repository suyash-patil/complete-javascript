// Var is a way to declare variable in javascript. However, var is not block scoped like let and const. Instead it is functional or globally scoped. For example:

if(6 > 4) {
  var name = "John";
}

console.log(name); // It will print John as name is globally scoped and will remain in the memory. If we had declared it as let or const it would have given us error

// var can be declared below their use

function sayHi() {
  phrase = "Hello";

  console.log(phrase);

  var phrase;
}
sayHi(); // This is a correct code, as all the variables are hoisted to the top