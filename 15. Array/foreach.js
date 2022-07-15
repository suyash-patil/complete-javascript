// forEach allows to run a function for every element of an array

arr = [1,2,3,4,5];
arr.forEach((val, idx, arr) => {
  console.log(`${val} is at index ${idx} in ${arr}`);
});
