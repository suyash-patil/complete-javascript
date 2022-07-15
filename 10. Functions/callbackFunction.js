// When we pass functions as a value and using function expressions

function ask(age, yes, no) {
  if(age > 18) yes();
  else no();
}

function showYes() {
  console.log('YES');
}

function showNo() {
  console.log('NO');
}

ask(20, showYes, showNo);

// The arguments showYes and showNo are called as callback functions or just callbacks. The idea is that we pass a function and expect it to be “called back” later if necessary. In this case, showYes becomes the callback for “yes” answer, and showNo for “no” answer.
