let xp = 3;
let yx = 3.4;

console.log(xp + yx);

let xo = "10"
let yo = "20"

console.log(xo + yo); //concatenation

console.log(xp / yx);

console.log(xo / 'book');

//convert a number to a string

let po = 30
console.log(typeof po.toString());

//to fixed point
const to2decimal = xp / yx
console.log(to2decimal.toFixed(2));

//convert string to number
let xoo = Number(xo)
let yoo = Number(yo)
console.log(xoo + yoo);

//parseFloat converts a string and returns the first number
console.log(parseFloat("440 year"));
console.log(parseFloat("440 550 year"));

//parseInt converts a string and returns the first integer  
console.log(parseInt("10.00"));
console.log(parseInt("I have 30 naira"));
console.log(parseInt("30 40 50"));