//if or else
//it evaluates the condition inside the bracket
//use if statement if the code to be executed is true,  while else if the code to be executed is false

// if(condition to be tested){
//     //code to be executed if condition is true
// } else {
//     //code to be executed if condition is false
// }

const checkAmount = 1000;

if (checkAmount > 600) {
  console.log("You qualify for a free delivery");
} else {
  console.log("You do not qualify for a free delivery");
}

//else if - use else if to test for multiple conditons
if (checkAmount >= 1200) {
  console.log("low funds");
} else if (checkAmount <= 500) {
  console.log("steady");
} else if (checkAmount > 900 && checkAmount <= 600) {
  console.log("keep going");
} else {
  console.log("you are in the mid range");
}

//ternary operator - a compact way of writing if else statements
const tt =
  checkAmount <= 900
    ? "hh"
    : checkAmount < 400
      ? "ll"
      : checkAmount > 900 && checkAmount <= 600
        ? "kk"
        : "oo";

console.log(tt);


//switch statement performs a series of actions based on diff conditions
//switch statement is evaluated once
//the value is compared with the value of each case
//if there is a match, the associated block of code is executed
//if there is no match, the default block of code is executed

//switch case is strict in nature - checks for data type and value
switch (ai = 2) {
  case 1:
    ai = "one";
    break;
  case "2":
    ai = "two";
    break;
  case 3:
    ai = "three";
    break;
  default:
    console.log("0");
    break;
}

console.log(`the value is ${ai}`); //writing in template literals or strings

const getDate = new Date().getDay(); //friday
console.log(getDate); //5

switch (getDate) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Friday");
    break;
  case 2:
    console.log("Thursday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Tuesday");
    break;
  case 8:
    console.log("Monday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("no day found");
    break;
}


// const operator = prompt("Enter operator (either +, -, *, or /");
// let ourResult;

// const num1 = parseFloat(prompt("Enter first number"));
// const num2 = parseFloat(prompt("Enter second number"));

// switch (operator) {
//   case "+":
//     ourResult = num1 + num2;
//     alert(`${num1} + ${num2} = ${ourResult}`);
//     break;
//   case "-":
//     ourResult = num1 - num2;
//     alert(`${num1} - ${num2} = ${ourResult}`);
//     break;
//   case "*":
//     ourResult = num1 * num2;
//     alert(`${num1} * ${num2} = ${ourResult}`);
//     break;
//   case "/":
//     ourResult = num1 / num2;
//     alert(`${num1} / ${num2} = ${ourResult}`);
//     break;
//   default:
//     alert("Invalid operator");
// }
