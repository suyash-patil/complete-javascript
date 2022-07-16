// It is used for function borrowing

// lets say we have an object person1

let person1 = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    console.log(this.firstName + " " + this.lastName);
  }
};

// Now we want to create another object person2 which would have getFullName as a method. One way is to copy the function, but that is not the right way to do it (DRY). So we can borrow function from person1.
// We can do something like this

let person2 = {
  firstName: 'Jack',
  lastName: 'Wilson',
};

person1.getFullName.call(person2); // this is attached to person2 object

// We can also separate out the function and attach this keyword to wherever we want

function printFullName(city) {
  console.log(this.firstName + " " + this.lastName + " from " + city);
}

printFullName.call(person1, "Mumbai");
printFullName.call(person2, "Delhi");
