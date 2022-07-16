// setTimeout allows us to run a function once after the interval of time.

setTimeout(() => {
  console.log('Display after 1 second');
}, 1000) // default time is zero

console.log('First Display this');

// JavaScript doesn't wait for settimeout function, it instead assign a timer to that function and when that timer comes to 0 it runs it. so first "First display this" is displayed and then settimeout after 3 seconds.
// It takes a callback function as the first argument and second argument is the time after which the function should run.

// There is also a function called clearTimeout to clear any timeout given.

let t1 = setTimeout(() => {
  console.log('Hello');
},4000);

clearTimeout(t1);


// Zero delay setTimeout
// lets take a function


function x() {
  setTimeout(() => {
    console.log('Hello World');
  });

  console.log(5);
  console.log(4);
  console.log(3);
  console.log(2);
}

x();

console.log('World');
console.log('Life');

// Here hello world is only printed after the whole script is completed

