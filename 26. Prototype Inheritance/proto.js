// There is a hidden property in an object which is [[Prototype]] that is either null or set to some other object. If a property is not found in an object, JS looks for the referenced object. The referenced object is called prototype.

let animal = {
  eats: true,
};

let cat = {
  mews: true,
}

// We can set the prototype by using __proto__

cat.__proto__ = animal;

console.log(cat.eats); // It looks into animal since cat has no eats property

