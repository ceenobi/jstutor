//js has 8 data types
//string
//number
//boolean
//undefined
//null
//object
//symbol
//bignit

//strings - are written in quotes and used for outputting texts
const hello = "hello how are you";
//to check datatype in js
console.log(typeof hello);

//number are stored in decimal values but can be written with or without decimals
let length = 45;
let height = 33.7;

let waist = "70";
let gg = 70;
console.log(typeof waist); //string
console.log(typeof gg); //number

//boolean - can only have two values - true or false
let ab = true;
let cd = false;

console.log(typeof ab);

//undefined - a variable declared without passing a value
let today;
console.log(typeof today);

let tomorrow = ""; //this is not undefined

//null - can only hold a value - null
let obj = null;

//objects can contain arrays,  dates,  and are denoted wih curly braces
const person = {
  firstName: "Charles",
  lastName: "tech",
  occupation: "web dev",
};

console.log(person);