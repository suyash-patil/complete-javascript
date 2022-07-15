// To traverse through values in an iterables we can use for..of loop

let person = {
  name: 'John',
  age: 20,
  isAdmin: 'true',
};

/*
for (values of person) {
  console.log(values); // It will give error because objects are not iterables
}
*/

// We can also iterate over strings like this to get the index

let a = 'HelloWorld';

for (values of a) {
  console.log(values); // This will print all the character values
}