let value = 56;

if(value > 50) {
  console.log('This value is greater than 50');
} // If(..) statement evaluates the conditions inside brackets and if result is true it executes the code

/* An If statement can also contain and else statement for the negation. So if something in the if is not true then code inside the else will execute
*/


value = 45;
if(value === 50) {
  console.log('This value is 50');
} else {
  console.log('This value is not 50');
}

// You can chain different if and else, for eg.

if (value === 50) {
  console.log('This value is 50');
} else if(value == 40) {
  console.log('This value is 40');
} else {
  console.log('This is neither 50 nor 40');
}
