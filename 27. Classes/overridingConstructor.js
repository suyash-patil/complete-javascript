// super() keyword is to be called when creating child class constructor

class Animal {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`${this.name} walks`);
  }
}

class Kangaroo extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
  walk() {
    console.log(`${this.name} hops`);
  }
  getColor() {
    console.log(`${this.name} is of ${this.color} color`);
  }
}

let animal = new Animal('animal');
let kangaroo = new Kangaroo('kangaroo', 'brown');
animal.walk(); // Animal walk
kangaroo.getColor(); // New constructor
