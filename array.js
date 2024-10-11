//arrays are used to store multiple values in a single variable
const classItems = ["Book", "chair", "desk"];
console.log(classItems);

let item1 = "book";
let item2 = "chair";
//the above is notideal to list out items hence the need for array

//how can we create an array
const classItems2 = ["book", "chair", "desk"];
console.log(classItems2);

//initialise an empty array
const randomThings = [];
randomThings[0] = "phone";
randomThings[1] = "pen";
randomThings[2] = "notebook";
console.log(randomThings);

//using the new array keyword
const classItems3 = new Array("tv", "fan", "sofa");
console.log(classItems3);

//accessing elements in an array - we do so via their index position
console.log(classItems3[0]);
console.log(classItems3[1]);
console.log(classItems3[2]);

//updating/modify elements in an array
classItems3[0] = "television";
console.log(classItems3);

//covert an array to a string
console.log(classItems3.toString());

//join methood
console.log(classItems3.join("/"));

//add items to an array
//push method adds an item to the last position index in an array
console.log(classItems.push("Laptop"));
console.log(classItems);
//unshift adds an item to the starting position of an array
console.log(classItems.unshift("Modem"));
console.log(classItems);

//remove an item from an array
//pop - removes last item
//shift - removes the first item
console.log(classItems.pop());
console.log(classItems);
console.log(classItems.shift());
console.log(classItems);

//remove an item from a specific index

//slice returns selected elements in an arrray as a new array
const myFood = ["rice", "beans", "eba", "salad", "oo", "pp"];
console.log(myFood.slice(3, 4));
console.log(myFood);

//merge two or more arrays - concat method or the spread operator
// const mergedArray = places.concat(myFood);
// console.log(mergedArray);


// //using the spread operation
// const spreadMyArray = [...myFood, ...places];
// console.log(spreadMyArray);



