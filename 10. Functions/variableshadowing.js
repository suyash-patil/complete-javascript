// If a function has a variable with an identical name as that of an outer variable, then all the changes to that variable will happen only to the local variable. This effect is known as variable shadowing.


let d = 6;

function add(a, b) {
  let d;
  d = a + b;
  console.log(d);
}

add(8,9);
console.log(d); // outer d doesn't change
