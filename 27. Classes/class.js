// In object-oriented programming, a class is an extensible program-code-template for creating objects

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log('Hi ' + this.name);
  }

}

let user = new User('John');
user.greet();