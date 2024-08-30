let mac = "mac";
let hp = "hp";

//the length checks the number of characters in a string
let textLength = "Today is friday";
console.log(textLength.length);

//methods are actions perfomed on datatypes

//slice method - extacts a part of a string -it takes two arguments - start position to be sliced and the end position
let fruits = "Apple,  banana,  pear";
console.log(fruits.slice(7,14));

//the replace method - replaces a certain part of a string with another value.  it takes two arguments- the text to be replaced and the new text to be added
let myText = "I have a book"
console.log(myText.replace("have", "own"));

//the replace method can only change the first occurrence of a word
myText = "I own a laptop and also own a book"
console.log(myText.replace("own", "have"));

//the replaceAll method
console.log(myText.replaceAll("own", "have"));

//the replace method is case sensitive
let food = "I love rice. Rice is my best food,  Rice is delicious"
console.log(food.replaceAll("Rice", "Beans"));

//converting to uppercase or lowercase
console.log(food.toLowerCase());
console.log(food.toUpperCase());

//concat method  - join two or more things 
let text1 = "I have a shoe"
let text2 = "The shoe is fine"
console.log(text1.concat(" ",text2));
//another way to join
console.log(text1 + " " + text2);

//template literals or strings are used to reference a variable as part of a text output. it is encased in backticks
let money = 5000
let mySum = `The amount I have is ${money}`
console.log(mySum);

//trim method - removes spaces from a string
let myWord = "   hey all"
console.log(myWord);
console.log(myWord.trim());
console.log(myWord.trimStart());
console.log(myWord.trimEnd());

//indexof - return the index position of the first occurrence of a text in a string
let findMyText = "Please find me a pen and find a biro"
console.log(findMyText.indexOf("find"));

//includes method - returns true if a sring contains a specified value
console.log(findMyText.includes("fendi"));

//split method - converting a string to an array
let items = "Pen, paper, table, chair"
console.log(items);
console.log(items.split());

//xcercise
//output a list of items and check its length
//slice your string and extract the third syllable word
//find the index of the fourth word