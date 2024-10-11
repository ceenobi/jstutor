///operators are used to perfom actions
//type of operators

//assignment operator - assigns a value to a variable
let px = 5;

//arithmetic operators - perform arithmetic operations- (+, -, *,/,**, %)
let ee = 5;

console.log(px + ee); //addition
console.log(px - ee); //substraction
console.log(px * ee); //multiplication
console.log(px / ee); //division
console.log(px ** ee); //exponentiation
console.log(px % 2); //modulus or remainder of
console.log(px++); //increment
console.log(px--); //decrement

//comparison operators - compare values and return true or false- (==, ===, !=, !==, <, >, <=, >=)

let ff = 30;
//== equal to checks if they are of the same value
console.log(ff == 20); //false
console.log(ff == 30); //true
console.log(ff == "30"); //true

//=== strictly equal to checks if they are of the same value and datatype
console.log(ff === "30"); //false

//!= not equal to - checks only for value

console.log(ff != "30"); //false

//!== strictly not equal to - checks for value and datatype
console.log(ff !== "30"); //true

//>
console.log(ff > 50); //greater than

console.log(ff < 50); //less than

console.log(ff >= 50); // greater than or equal to
console.log(ff <= 50); // less than or equal to

//logical operators - combine boolean values - (&&, ||, !)

//&& - logical truthy or logical and
// || - logical or
// logical not

//logical OR evaluates the operand from left to right
//for each of the operand, it converts it to boolean and if the result is true,
//it stops and returns the original value of the operand
//if all the operands are false, it return the last operand

let dd = 4;
ee = 5;
let output = dd || ee;
console.log(output);//4 cos its tue and its a number

console.log(1 || 0 ); //1 is true and 0  is false
console.log(null || 0 ); // 0 cos all operands are false
console.log(null || 4 || 0); 


//logical && seeks t evaluate abslute true in the operand and returns false if there is a falsy value
console.log(dd && ee); //5 
console.log(0 && 4); //0
console.log(null && 5) //null; 
console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false    

//logical not
console.log(!true); //false
console.log(!false); //true
console.log(!0); //true
console.log(!null); //true
console.log(!undefined); //true
console.log(!""); //true

//ternary operator - a compact way of writing if else statements
const score = 60
const scoreBoard = score > 80 ? "good" : "average"
console.log(scoreBoard);

