//object come in key -value pairs and are identified in curly braces
let human = {
  name: "John Doe",
  age: 30,
  city: "New York",
  hobbies: ["reading", "painting", "coding"],
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

console.log(human);

//accessing properties of an object
//dot notation
console.log(human.name);
console.log(human.age);
console.log(human.city);
console.log(human.hobbies);

//array like methods
console.log(human["age"]);

//accessing methods of an object
human.food = "Rice";
console.log(human);

//modifying an object property
human.age = 31;
console.log(human);

//deleting a property from the object
delete human.food;
console.log(human);

console.log("ff" in human);

console.log("age" in human);

//object.assign copies the properties of or more objects to a new object

const subject = {
  name: "maths",
};
console.log(subject);
console.log(Object.assign(human,  subject));

//object.entries returns an array of the objects
const objEntries = Object.entries(human)
console.log(objEntries);

//object.fromEntries cretes an object from an array
console.log(Object.fromEntries(objEntries));

//object.create this creats a new object from an existing object
const human2 = Object.create(human);
human2.name = "Jane Doe";
console.log(human2);

//object.freeze prevents any changes to an object   
Object.freeze(human);
human.name = "Alice Doe";
console.log(human);

//object.keys returns an aray of the keys of an object
console.log(Object.keys(human));

//object.values returns an array of the values of an object
console.log(Object.values(human));