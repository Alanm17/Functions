"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// // const interface = "Audio";
// // const private = 534;

// function logger() {
//   console.log("My name is M,aziz");
// }
// // calling// running // invoking function

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

// //function declorations
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// //function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
//Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirment = 65 - age;
//   return ` ${firstName} retires in ${retirment} years`;
// };
// console.log(yearUntilRetirement(1991, "Jonas"));
// console.log(yearUntilRetirement(1980, "bob"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// console.log(cutFruitPieces);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(` ${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired :)`);
//     return -1;
//   }
// };

// // return ` ${firstName} retires in ${retirment} years`;

// console.log(yearUntilRetirement(1991, "Jonas"));
// console.log(yearUntilRetirement(1950, "Mike"));

//Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirment = 65 - age;
//   return ` ${firstName} retires in ${retirment} years`;
// };
// console.log(yearUntilRetirement(1991, "Jonas"));
// console.log(yearUntilRetirement(1980, "bob"));
// const calcAverage = (checkWinner) => (dolphins,'vs' koalas);
// const dolphins = (44 + 23 + 71) / 3;
// const koalas = (23 + 34 + 27) / 3;
// let function = checkWinner

//coding

//task 1
// const calcAvarega = (a, b, c) => (a + b + c) / 3;
// console.log(calcAvarega(3, 4, 5));
// // test1
// let scoreDoolphins = calcAvarega(44, 23, 71);
// let scoreKoalas = calcAvarega(65, 54, 49);
// console.log(scoreDoolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win thropy (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win thropy (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// };
// checkWinner(scoreDoolphins, scoreKoalas);
// checkWinner(546, 111);

// // test 2
// scoreDoolphins = calcAvarega(85, 54, 41);
// scoreKoalas = calcAvarega(23, 34, 27);
// checkWinner(scoreDoolphins, scoreKoalas);
// // console.log(scoreDoolphins, scoreKoalas);
// //task 3
// function checkWinner(Dolphins, Koalas) {
//   if (Dolphins >= 2 * Koalas) {
//     console.log(`KOALAS WIN (`${Koalas} VS ${Dolphins})`);
//   } else {
//     console.log(`Dolphins WIN (`${Dolphins} VS ${Koalas})`);
//   }
// }

// const checkWinner = calcAvarega(dolphins, koalas);

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", " Steven", "Peter"];
console.log(friends);
const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length - 1);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
