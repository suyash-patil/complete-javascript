// ? is the ternary operator

let age = 18;

age > 10 ? console.log('Age is greater than 10') : console.log('Age is less than 10');

// The first statement will run if the condition is true and if the condition is false then the second condition will run

// You can also chain different ternary operators
age = 20;
age > 18 ? (age > 23 ? console.log('Age is greater than 23') : console.log('Age is between 18 and 23')) : console.log('Age is less than 18');