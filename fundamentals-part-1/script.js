// let js = "amazing";
// if (js === "amazing") alert("JavaScript is Fun!");
// // for printing in console
// console.log(40 + 8 + 23 - 10);


// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// // null type of shows the object type
// let coding;
// let code = null;
// console.log(typeof javaScriptIsFun);
// console.log(typeof "javaScriptIsFun");
// console.log(typeof 500);
// console.log(typeof code);
// console.log(typeof coding);
// console.log(typeof 23.50);



// string literals

// const firstName = 'ashwin';
// const job = 'developer';
// const birthYear = 1995;
// const year = 2023;

// // concatenate string
// let intro = "I'm " + firstName + " currently I'm working as a " + job + " and I'm a " + (year - birthYear) + " Years old!";
// console.log(intro);


// // same using string literals
// intro = `I'm ${firstName}, currently working as a ${job} and I'm a ${year - birthYear} years old!`;
// console.log(intro);

// // normal string using backticks
// console.log(`Hello world!`);

// // multiple line
// console.log("Hello, \nNew line \nimplemented");
// console.log(`hello 
// new line
// implemented`);

// // Taking Decisions using If, Else statement

// // check the veh driver is above 18 or not

// const age = 15;

// const isAgeEnough = age >= 18;

// // if (check condition){
// //     // Do something;
// // }

// // what if user not then do else thing.

// if (isAgeEnough) {
//     console.log("user is able to start Driving. 🚗");
// } else {
//     console.log("user not at the age");
// }


// if (age >= 18) {
//     console.log("user is able to start Driving. 🚗");
// } else {
//     console.log(`user not allowed to drive the car, you have to wait ${18 - age} year.`);
// }

// // This is called the control structure.




// Type coercion and type Conversion in javascript
// type conversion

// const inputYear = '1995';
// console.log(inputYear + 18); // concatenate the string with numbers and it results 199518. its called the type coercion

// console.log(Number(inputYear) + 18); // this is the type conversion. Number (), String(), Boolean() this three type we can convert.

// console.log(Number('jonas')); // it return the NaN = Not a Number
// console.log(typeof NaN); // means invalid number but still a number.

// console.log(String(23) + " = " + typeof String(23));

// // Type coercion

// console.log("I'm " + 23 + " year old."); // type coercion, with addition operator converts into a string

// console.log("23" - "10"); // return 13, with minus operator it convers it into a Number.
// console.log("23" * "10"); // multiplication operator it convers it into a Number.
// console.log("23" / "2"); // division operator it convers it into a Number.

// // Truthy or Falsey

// console.log(Boolean(0)); // false
// console.log(Boolean("")); // if you put space then it convert true
// console.log(Boolean(undefined)); // false
// console.log(Boolean('jonas')); //true
// console.log(Boolean({})); // its an object true

// const money = 0;

// if (money) { // false because 0 is falsey value
//     console.log("I have Money");
// } else {
//     console.log("Need to find a Job, ASAP!");
// }


// let height;

// if (height) {
//     console.log("height is defined");
// } else {
//     console.log("Undefined")
// }

// == vs ===

// const age = 18;

// if (age === 18) console.log("You just became an adult"); // if there is one line then use without curly braces.

// console.log(18 === 18); //strict type
// console.log('18' === 18); // strict type

// console.log('18' == 18); //loose type , here it typpe coercion.

// const favourite = prompt("What is your favourite number?"); // it return the string value

// console.log(favourite, typeof favourite);

// if (Number(favourite) === 23) {
//     console.log("23");
// } else if (favourite === 7) {
//     console.log(7);
// } else {
//     console.log("There is no number");
// }


// // "!==" strong operator and != loose operator

// Logical Operators
// const hasDrivingLicense = true; // A
// const hasGoodVision = true; // B

// // && = AND
// // || = OR
// // ! = NOT



// console.log(hasDrivingLicense && hasGoodVision);
// console.log(hasDrivingLicense || hasGoodVision);
// console.log(!hasDrivingLicense);



// if (hasDrivingLicense || hasGoodVision) {
//     console.log("user is able to drive!");
// } else {
//     console.log("Not able to Drive");
// }

// const isTired = true;

// console.log(hasDrivingLicense && hasGoodVision && isTired);

// if (hasDrivingLicense && hasGoodVision && !isTired) {
//     console.log("Drive");
// } else {
//     console.log("Not Drive");
// }

// // The switch statement

// let day = 'monday';

// switch (day) {
//     case 'monday': // (day === 'monday)
//         console.log("Planning Phase.");
//         break;
//     case 'tuesday':
//         console.log("work on project");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log("100 days of code challenge.");
//         break;
//     case 'friday':
//         console.log("javascript.");
//     case 'saturday':
//     case 'sunday':
//         console.log("work on projects");
//         break;
//     default:
//         console.log("rest.");
// }

// // above same example using if-else if

// if (day === 'monday') {
//     console.log("Planning Phase.");
// } else if (day === 'tuesday') {
//     console.log("work on project");
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log("100 days of code challenge.");
// } else if (day === 'friday') {
//     console.log("javascript.");
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log("work on projects");
// } else {
//     console.log("rest.");
// }

// The conditional (Ternary) Operator.

const age = 18;

age >= 18 ? console.log("User is an adult.") : console.log("user is an teenage.");

// Every operator is an Expression.

const drink = age >= 18 ? "wine 🍷" : "water 💧";

console.log(drink);

// ternary operator use in string literals because it evaluates a value(expression).

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`); //literals.