let user = {
  name: "John",
  age: 30
};

for(let val of Object.keys(user)) {
  console.log(val);
}

for (let val of Object.values(user)) {
  console.log(val);
}

for (let val of Object.entries(user)) {
  console.log(val);
}