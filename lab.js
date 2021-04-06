console.clear();
/* TS Algorithms Lab */
/* --- Problem #1 - variable types --- */
// swap the values of these two variables and console.log() the result
// example outputs:
// console.log(numberString) => '7'
// console.log(realNumber) => 32
var numberString = "42";
var realNumber = 7;
var x = realNumber.toString();
realNumber = parseInt(numberString);
numberString = x;
// console.log(`Number String: ${numberString} & Real Number: ${realNumber}`);
///////////////////////////////////////////////////////////
/* --- Problem #2 - function and mixed array type --- */
// 1. create an array type that is a mix
// of strings of numbers and actual numbers
var arrOne = ["88", 7, "70", "2", -89];
// console.log(arrOne);
////////////////////////////////////////////////////////////
// 2. write a function that accepts an array as
//a parameter, loops over it and converts all the
// strings to numbers. the function should return a new array of only numbers
// ex: stringToNum([10, '34', 3, '17']) => [10, 34, 3, 17]
var arrTwo = ["90", "21", "-5", 4, 45];
console.log(arrTwo);
var stringToNum = function (arr) {
    return arr.map(function (element) { return Number(element); });
};
console.log("Converted: " + stringToNum(arrTwo));
// Todo - Create union type here
// Todo - write area function here
