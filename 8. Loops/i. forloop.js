// Loops are piece of code that runs until certain condition is met
// They are used to perform n number of operations of similar logic

/*
For Loop follows the following structure

for(begin; condition; step) {// logic }

*/

for(let i = 0; i < 3; i++) {
  console.log(i);
} // i is intially 0, then at each step it is incremented by 1 and the whole loop runs till i is less than 3

// You can also break the loop by using 'break' keyword

for(let i = 0; i < 10; i++) {
  if(i == 3) break;
  console.log(i);
} // It prints till 2 and then breaks the loop

// You can skip the current iteration by using 'continue' keyword

for(let i = 0; i < 10; i++) {
  if(i==3) continue;
  console.log(i);
} // 3 is not printed as we skipped it
