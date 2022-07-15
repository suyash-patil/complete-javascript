// Usually, if the array is longer than the list at the left, the “extra” items are omitted. If we want to gather those rest elements, we can add one more variable using three dots.

let [name1, name2, ...restnames] = ['John', 'Depp', 'Jack', 'Hill', 'Carry'];

console.log(name1);
console.log(name2);
console.log(restnames);

// Rest Parameters

function sumAll(...args) {
  let sum = 0;
  for(value of args) {
    sum += value;
  }
  return sum;
}

console.log(sumAll(1,2,3,4));
