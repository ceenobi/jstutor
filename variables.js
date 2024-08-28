// js statement is comprised of values, operators, expression, keywords and
//   comments. js statement often begin with a keyword to identify the js action that is to
//   be performed. An expression is a combination of variables, operators which computes to a
//   value.

//variables are used to store values to be used at any point in time
//how to define a variable name
//a letter A-Z or a-z
// a dollar sign ($)
// an underscore (_)

//you can begin a variable with a number

//js varaibles are case sensitive
lastname = 3;
lastName = 4; //camelcased
LASTNAME = 5; //uppercase
LastName = 6; //pascalcased

//js name declarable
ourname = 4; //atomatic name - not good practise

//var,  const , let keyword
var book = "happy"; //outphased
//2015 ecma6 js
let shoe = "nike";
const watch = "anything";

//when do we use var,  let,  const
//var - use if you want to support older bowsers
//let - use if you might change the value of the variable at some point
let initialBal = 0;
//const - use if value should not be changed

//redeclaring a variable name
//you cant redeclare a variable name that begins with let or const
// var a = book
// var a = show
let year = 2024;
console.log(year);
//reassigning a variable
year = 2025;
console.log(year);

const y = 2;
console.log(y);
// y = 3;
// console.log(y); can't reassign a const variable


//block and global scope variables define how variables an be accessed
//block scope
{
    let ac = 40
    console.log(ac);
}

let ac = 30
console.log(ac);