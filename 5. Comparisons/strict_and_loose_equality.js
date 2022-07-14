/* There are two types of equality checks in JS, one is
  == which is loose equality check. It checks only the value and doesn't care about the type. Type coercion is there.
  Type Coercion is implicit conversion of datatype.
  === which is strict equality check. It checks the value as well as the type of the data compared.
*/
console.log(0 == false); // true
console.log(0 === false); // false

// Weird things with null and 0

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true