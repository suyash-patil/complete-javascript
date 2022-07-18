// The property by which a class can inherit the properties and methods of another class is called inheritance.

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} Eats`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} Barks`);
  }
}

// extends keyword is used to inherit the properties and methods. Now, dog is an animal so it can eat but as well as barks so we should not write the code for eat function again. Instead we can use the animal method.

let dog = new Dog('dog');
dog.eat();
dog.bark();
