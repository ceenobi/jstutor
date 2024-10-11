//function is a block of code designed to perform a particular task
//it's a reuseable piece of code that performs some logic and gives you a result
//it is executed when called upon

function myFunctionName() {
  console.log("Hi Charles");
} //function declaration

//arrow function
const friday = () => {
  console.log("friday");
};

//invoking functions
myFunctionName();
friday();

//functions are made of - function keyword, parenthesis, curly braces and the return keyword
//the return keyword is used to give the result of the function and can only be used when writing functions. Nothing should be written after the return statement

function addMe() {
  return 3 + 3;
}
console.log(addMe());

//parameters and arguments
//parameters are like placeholders that receives variables. They are used when defining a function
//arguments are the values the function receives from each parameter

function sumMe(a, b) {
  return a + b;
}
console.log(sumMe(4, 7));

function greetMe(name) {
  console.log(`hello ${name}`); //name here is the placeholder
}
greetMe("Ayo"); //argument
greetMe("Ay");
greetMe("A");

//write a function cartTotal that takes in a parameter - cart
//the parameter cart should be an array. the array should have 2 objects in it.
//the objects should have the properties- price and quantity
//you are to supply the values
//the values of each of the properties should be a number
//the function cartTotal should be able to multiply each of the value of the price and quantity and give you a total sum of the values of the two objects

const cartTotal = (cart) => {
  let total;
  const obj1 = cart[0].price * cart[0].qty;
  const obj2 = cart[1].price * cart[1].qty;
  total = obj1 + obj2;
  console.log(total);
  return total;
};

cartTotal([
  { price: 4000, qty: 4 },
  { price: 2000, qty: 2 },
]);

//create an array named todos - which should be an array of objects whose properties should be - title, duedate and id. Their values should in string
//write a function that lets you add a new item to the todos array
//for the value of duedate, you are to use date get time method and ensure it is a string.

const todos = [
  {
    title: "Hello",
    duedate: "11/10/24",
    id: "1",
  },
];

const addTodos = (a, b, c) => {
  return todos.push({ title: a, duedate: b, id: c });
};

console.log(addTodos("Friday", new Date().getTime().toString(), "2"));
console.log(todos);

const calcFoodTotal = (food, tip) => {
  let total;
  const tipAmt = tip;
  const foodAmt = food;
  total = foodAmt + tipAmt;
  console.log(total);
  return total;
};

let ttt = calcFoodTotal(7000, 200);

//write a function that splits the bill of our calcFoodTotal to be shared among users. if the user is less than or equal to 1, the bill should return the total.
//but if the user is more than 1, the bill should be split among the users

function splitFoodBill(foodTotal, users) {
  if (users <= 1) {
    return foodTotal;
  } else if (users > 1) {
    const bill = foodTotal / users;
    return bill;
  }
}

console.log(splitFoodBill(ttt, 4));