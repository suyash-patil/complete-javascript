// A function bundled together with its lexical environment is called as closures

function x() {
  let i = 6;
  function y() {
    console.log(i); // lexical scoping
  }
  y();
}

x();
// At first glance, it might seem not obvious that this code works. In some programming languages, the local variables within a function exist for just the duration of that function's execution. Once x() finishes executing, you might expect that the i variable would no longer be accessible. However, this is obviously not the case in JavaScript.

// Fun with closures

function top() {
  for(var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

top();
// It will print 5 5 times which was not expected. We were expecting 0 1 2 3 4. This is the case with closure. Each time setTimeout is called it is assigned a timer along with the reference to the variable i. now since i is a global scope variable, it will just keep the reference of that variable. after 1 second, the value of i is now 5, it will start printing 5. To solve this issue we can use let instead of var

function modified() {
  for(let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

modified();

function notlet() {
  for (var i = 0; i < 5; i++) {
    function helper(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }

    helper(i);
  }
}

notlet();