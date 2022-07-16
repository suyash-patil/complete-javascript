// setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

let interval = setInterval(() => {
  console.log(1);
}, 1000);

// Above function will run infinite times afer 1 second each logging the value '1'.
// We can clear setInterval by using clearInterval

setTimeout(() => {
  clearInterval(interval);
},5000);
// This function will stop the interval after 5 seconds
