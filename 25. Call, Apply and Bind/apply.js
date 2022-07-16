// Apply is same as call but it accepts arguments in the form of list

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

printFullName.apply(person1, ["Mumbai"]);
printFullName.apply(person2, ["Delhi"]);
