// super() keyword is used to call the parent method from the child class

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
  previousWalk() {
    super.walk();
  }
}

let animal = new Animal('animal');
let kangaroo = new Kangaroo('kangaroo');
animal.walk(); // Animal walk
kangaroo.walk(); // Kangaroo hops
kangaroo.previousWalk(); // You can see that inside kangaroo class we are calling parent method.
