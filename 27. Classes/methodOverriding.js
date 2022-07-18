// We can override a method in the inherited class

class Animal {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`${this.name} walks`);
  }
}

class Kangaroo extends Animal {
  walk() {
    console.log(`${this.name} hops`);
  }
}

// extends keyword is used to inherit the properties and methods. Now, dog is an animal so it can eat but as well as barks so we should not write the code for eat function again. Instead we can use the animal method.

let animal = new Animal('animal');
let kangaroo = new Kangaroo('kangaroo');
animal.walk(); // Animal walk
kangaroo.walk(); // You can see that the function is outputting differently


// static methods

// We can assign method to the class as a whole

class Car {
  constructor(name) {
    this.name = name;
  }

  static getWheels() {
    console.log(`${this.name} has 4 wheels`);
  }
}

Car.getWheels(); // Car has 4 wheels