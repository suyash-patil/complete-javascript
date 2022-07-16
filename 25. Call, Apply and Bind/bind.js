// Bind method binds this keyword to an object and returns a copy of that function

let person1 = {
  firstName: 'John',
  lastName: 'Doe'
};

let person2 = {
  firstName: 'Jack',
  lastName: 'Wilson',
};

function printFullName(city) {
  console.log(this.firstName + " " + this.lastName + " from " + city);
}

let printPerson1 = printFullName.bind(person1,["Mumbai"]);
printPerson1();