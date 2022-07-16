// JSON.stringify convert object into json
// JSON.parse convert json back to the object

let student = {
  name: 'John',
  age: 23,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
};

let json = JSON.stringify(student);

console.log(json); //json string

let backtoobject = JSON.parse(json);

console.log(backtoobject); // object
