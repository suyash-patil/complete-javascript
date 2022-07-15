// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

let map = new Map();

map[3] = 2;
map.set('name', "John");

console.log(map);

// For looping over map, three methods are there

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50]
]);

for(let veg of recipeMap.keys()) {
  console.log(veg);
}

for (let amt of recipeMap.values()) {
  console.log(amt);
}

for (let veg of recipeMap.entries()) {
  console.log(veg);
}
