console.clear();
/* TS Algorithms Lab */

/* --- Problem #1 - variable types --- */
// swap the values of these two variables and console.log() the result
// example outputs:
// console.log(numberString) => '7'
// console.log(realNumber) => 32
let numberString: string = "42";
let realNumber: number = 7;
let x: string = realNumber.toString();
realNumber = parseInt(numberString);
numberString = x;
// console.log(`Number String: ${numberString} & Real Number: ${realNumber}`);

///////////////////////////////////////////////////////////

/* --- Problem #2 - function and mixed array type --- */
// 1. create an array type that is a mix
// of strings of numbers and actual numbers

let arrOne: (string | number)[] = ["88", 7, "70", "2", -89];
// console.log(arrOne);

////////////////////////////////////////////////////////////

// 2. write a function that accepts an array as
//a parameter, loops over it and converts all the
// strings to numbers. the function should return a new array of only numbers
// ex: stringToNum([10, '34', 3, '17']) => [10, 34, 3, 17]

let arrTwo: (string | number)[] = ["90", "21", "-5", 4, 45];
console.log(arrTwo);
const stringToNum = (arr: (number | string)[]): number[] => {
  return arr.map((element) => Number(element));
};
console.log(`Converted: ${stringToNum(arrTwo)}`);

// function accepts(numbers: string[]): void {
//   let map = numbers.map((x) => x);
//   console.log(map);
// }
// console.log(accepts(arrTwo));

// Todo write the mixed array of strings and numbers

// Todo write a function to convert the mixed array to an array of only numbers

/* --- Problem #3 - Tuple Type --- */
// 1. Create a tuple type named 'cityCoordinate' that has three elements: city name, latitute, and longitude
// 2. Create some cities with lat/lon data and pass them into printCityData;
// uncomment the function to test your solution

// Todo - create the type definition, and some cities

// 🚨 uncomment this function to test your solution 🚨
// function printCityData(city: cityCoordinate): void {
//     console.log(`${city[0]} is at Lat: ${city[1]}, Long: ${city[2]}`);
// }

// printCityData(seattle);

/* --- Problem #4 - Interfaces and Union Types --- */
// Given the following interfaces and type declarations...
// 1. Create a union type that is the union of the Square, Rectangle, and Circle interfaces
// 2. Write the area function that: 1. Only takes in your union type as an input 2. Returns the area of the shape
// oh no! math!
// the area of a square is found by multipling the width by the width
// the area of a rectangle is found by multipling the width by the height
// the area of a circle is found by multiplying pi by the radius squared

interface Square {
  kind: "square";
  width: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}

// Todo - Create union type here

// Todo - write area function here
