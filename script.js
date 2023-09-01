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

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", " Steven", "Peter"];
// console.log(friends);
// const y = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);
// // friends = ["bob", "alice"];
// const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// //exersice
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2017];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);
// const friends = ["Michael", "Steven", "Peter"];
// //add elements
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("Jon");
// console.log(friends);
// //remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

//CHALLANGE

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   // return reg >= 200 && reg <= 300 ? reg * 0.15 : reg * 0.2;
// };
// // const calcTip = (bill) =>
// //   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const bills = [125, 555, 44];
// // const reg = [234, 121, 290];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// // const tip = [calcTip(reg[0]), calcTip(reg[1]), calcTip(reg[2])];
// const totals = [
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[2] + tips[2],
//   // bills[3] + tips[3],
// ];
// console.log(bills, tips, totals);

// const jonasArray = [
//   "Mukhammadaziz",
//   "Kholdarov",
//   2037 - 2003,
//   "student",
//   ["Michael", "Peter", "Steven"],
// ];

// const jonas = {
//   firstName: "Mukhammadaziz",
//   lastName: "Kholdarov",
//   age: 2023 - 2003,
//   job: "student",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["firstName"]);
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you wanna know about me? Choose last or first name or age,job and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose lastName or firstName or age,job and friends!"
//   );
// }
// jonas.location = "Portugal";
// jonas["twitter"] = "@Kholdarov";
// console.log(jonas);

// /// Challenge
// // jonas.friends = 3 ;
// // friends.'Michael'
// // console.log(jonas.friends.3)
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends , and his best friend is  ${jonas.friends[0]}`
// );

// const Mukhammadaziz = {
//   firstName: "Mukhammadaziz",
//   lastName: "Kholdarov",
//   age: 2023 - 2003,
//   job: "student",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(Mukhammadaziz.lastName);
// console.log(Mukhammadaziz["lastName"]);
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);

// const interestedIn = prompt(
//   "What do you wanna know about me ? Options:friends , job , age , lastName , firstName or Friends"
// );
// console.log(Mukhammadaziz[interestedIn]);
// if (Mukhammadaziz[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("Wrong request!");
// }

// let Drive = false;
// const passTest = false;
// if (passTest) Drive = true;
// if (Drive) {
//   console.log("I can drive a car ");
// } else {
//   console.log("I can't drive ");
// }
//FUNCTION LOGGER
// function amj() {
//   console.log("sjp");
//   console.log('I"M Mukhammadaziz');
// }

// if ((amj = 'I"M Mukhammadaziz' >= "sjp")) {
//   console.log("I'm here");
// } else {
//   console.log("I'm not here");
// }

// //  <=*****************************************/////////////////////////////////////////////FUNCTION EXPRESSION
// const games = function (a, b, c) {
//   return (a + b + c) / 3;
// };
// console.log(games(34, 2123, 45));
// //

// // <=*****************************************////////////////////////////////////////////FUNCTION DECLORATION
// function game(a, b, c) {
//   return (a - b - c) / 2;
// }
// console.log(game(123, 345, 213));

// // <=*****************************************///////////////////////////////////////////////////ARROW FUNCTION
// const gm = (a, b, c) => (a * b + c) / 2;
// console.log(gm(345, 23, 12));

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

//  <=*****************************************/////////////////////////////////////////////////////// FUNCTIONS
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

// function mukk(cars, tanks) {
//   const automobiles = ` ${cars} cars and ${tanks} tanks have been sold`;
//   return automobiles;
// }

// const automobiles = mukk(34, 34); // Call the function and capture the result

// function asd(asr, ase) {
//   const ask = (asr + ase) / 2;
//   return ask; // Return the calculated average
// }

// const averageAmount = asd(100000, 3400); // Call the function and capture the result

// // Construct the final message using the captured variables
// const finalMessage = `The sum of automobiles ${automobiles} and their revenue $100000 with $3400 tax. Total amount left: ${averageAmount}`;

// // Log the final message
// console.log(finalMessage);

// // Log the output of mukk and asd functions directly
// // console.log(mukk(22, 34));
// console.log(asd(100000, 3400));

// function mukk(cars, tanks) {
//   const automobiles = ` ${cars} cars and ${tanks} tanks have been sold`;
//   return automobiles;
// }

// const automobiles = mukk(34, 34); // Call the function and capture the result

// function asd(asr, ase) {
//   const ask = asr - ase;
//   return ask; // Return the calculated average
// }

// const carPrice = 100000;
// const taxAmount = 3400;

// const averageAmount = asd(carPrice, taxAmount); // Call the function and capture the result

// // Construct the final message using the captured variables
// const finalMessage = `The${automobiles} and their revenue $${carPrice} with $${taxAmount} tax. Total amount left: $${averageAmount}`;

// // Log the final message
// console.log(finalMessage);

// Log the output of mukk and asd functions directly
// console.log(mukk(22, 34));
// console.log(asd(carPrice, taxAmount));

//Serious task
// function muk(car, tank) {
//   const automobile = ` ${car} cars and ${tank} tanks have been sold`;
//   return automobile;
// }
// let carsSold;

// while (true) {
//   const input = +prompt("Enter the number of cars sold:");

//   if (!isNaN(input)) {
//     carsSold = input;
//     break; // Exit the loop if valid input is provided
//   } else {
//     alert("Please enter only numbers.");
//   }
// }

// let tankSold;

// while (true) {
//   const input = +prompt("Enter the number of tanks sold:");

//   if (!isNaN(input)) {
//     tankSold = input;
//     break; // Exit the loop if valid input is provided
//   } else {
//     alert("Please enter only numbers.");
//   }
// }

// console.log("Cars sold:", carsSold);
// console.log("Tanks sold:", tankSold);

// const automobile = muk(carsSold, tankSold);
// //<=*****************************************///////////////////

// const PricePerCar = 12000;
// const TaxPerCar = 300;
// console.log(carsSold);
// const revenue = (carsSold + tankSold) * PricePerCar;
// const tax = (carsSold + tankSold) * TaxPerCar;
// const amountleft = revenue - tax;
// // console.log(amountleft);

// const final = `${automobile} and their revenue $${revenue} with $${tax} tax.
// total amount left $${amountleft}`;

// console.log(final);
// const cutFruitPieces = (fruit) => fruit * 4;

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//   return juice;
// }

// console.log(fruitProcessor(4, 5));

// const calcage = function (birthYear) {
//   return 2037 - birthYear;
// };
// const yearUntilRetirement = function (birthYear, firstName) {
//   const age = calcage(birthYear);
//   const retirment = 65 - age;

//   if (retirment > 0) {
//     console.log(`${firstName} hasn't retired yet`);
//     return retirment;
//   } else {
//     console.log(`${firstName} has already retired `);
//     return -1;
//   }
// };

// console.log(yearUntilRetirement(1991, "Mukhammadaziz"));
// console.log(yearUntilRetirement(1950, "aziz"));

// const friend1 = "Abror";
// const friend2 = "Humoyun";
// const friend3 = "Jahongir";

// const friends = ["Abror", "Humoyun", "Jahongir"];
// console.log(friends[2]);

// const years = new Array(2002, 2003, 2000, 2001);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends[1]);

// console.log(friends[friends.length - 1]);

// friends[2] = "Mukhammadaziz";
// console.log(friends[2]);

// const jonasArray = [
//   "Mukhammadaziz",
//   "Kholdarov",
//   2023 - 2003,
//   "teacher",
//   ["Jahongir", "Abror", "Humoyun"],
// ];

// const jonas = {
//   firstName: "Mukhammadaziz",
//   lastName: " Kholdarov",
//   job: "Student",
//   age: 2023 - 2003,
//   friends: ["Jahongir", "Abror", "Humoyun"],
// };
// console.log(jonas[("firstName", "lastName")]);

// const Namekey = "Name";
// console.log(jonas["last" + Namekey]);
// console.log(jonas["first" + Namekey]);
// const interestedIn = prompt("What do u wanna know about me? ");
// // console.log(jonas[interestedIn]);
// jonas.location = "Andijan";
// jonas["Email"] = "mukhammadazizuae@gmail.com";
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between age,lastName,firstName,job,friends"
//   );
// }
// // console.log(jonas);

// //Challange
// // const me = ["Jahongir", "Abror", "Humoyun"];
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends but the best one is ${jonas.friends[0]} he lives in ${jonas.location}`
// );
// const jonas = {
//   firstName: "Mukhammadaziz",
//   lastName: " Kholdarov",
//   job: "Student",
//   birthYear: 2003,
//   friends: ["Jahongir", "Abror", "Humoyun"],
//   hasLicense: false,
//   // calcAge: function () {
//   //   console.log(this);
//   //   return 2037 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummery: function () {
//     return `${this.firstName} is a ${this.calcAge()} - years old ${
//       this.job
//     } and he has ${this.hasLicense ? "a" : "no"} driver's license.`;
//   },
// };
// console.log(jonas.getSummery());

// // prompt.birthYear(this);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// if (jonas.hasLicense == true) {
//   console.log(
//     `${jonas.firstName} is a ${this.colcAge} - old teacher and he has driver's License `
//   );
// } else if (jonas.hasLicense == false) {
//   console.log(
//     `${jonas.firstName} is a ${this.colcAge} - old teacher and he has not driver's license `
//   );
// }
// task1
// const BMItest = {
//   fullName: 'John'
//   Johnbmi: 28.3,
//   Johnhieght: 1.95,
//   Markbmi: 23.9,
//   Markheight: 1.69,
//   calculator:
//   // task2
//   calcBMI: function () {
//     return `John's BMI ${this.Johnbmi} is higher than Mark's BMI ${this.Markbmi}`;
//   },
//   // task2
// };
// console.log(BMItest.calcBMI());

// const Mark = {
//   fullName: "Mark",
//   mass: 78,
//   height: 1.69,
//   calcBMII: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const John = {
//   fullName: "John",
//   mass: 92,
//   height: 1.95,
//   calcBMII: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// Mark.calcBMII();
// John.calcBMII();
// console.log(Mark.bmi);
// console.log(John.bmi);

// if (Mark.bmi > John.bmi) {
//   console.log(
//     `(${Mark.fullName})'s BMI (${Mark.bmi})is higher than (${John.fullName})'s BMI (${John.bmi})`
//   );
// } else if (John.bmi > Mark.bmi) {
//   console.log(
//     `(${John.fullName})'s BMI (${John.bmi})is higher than (${Mark.fullName})'s BMI (${Mark.bmi})`
//   );
// }
//
// console.log("Lifting weight repetition 1 🏋️‍♀️");
// console.log("Lifting weight repetition 2 🏋️‍♀️");
// console.log("Lifting weight repetition 3 🏋️‍♀️");
// console.log("Lifting weight repetition 4 🏋️‍♀️");
// console.log("Lifting weight repetition 5 🏋️‍♀️");
// console.log("Lifting weight repetition 6 🏋️‍♀️");
// console.log("Lifting weight repetition 7 🏋️‍♀️");
// console.log("Lifting weight repetition 8 🏋️‍♀️");
// console.log("Lifting weight repetition 9 🏋️‍♀️");
// console.log("Lifting weight repetition 10 🏋️‍♀️");

// for (let rep = 6; rep <= 30; rep++) {
//   console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
// }

// const jonasArray = [
//   "Mukhammadaziz",
//   "Kholdarov",
//   2023 - 2003,
//   "teacher",
//   ["Jahongir", "Abror", "Humoyun"],
// ];
