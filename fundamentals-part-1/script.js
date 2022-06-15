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

const firstName = 'ashwin';
const job = 'developer';
const birthYear = 1995;
const year = 2023;

// concatenate string
let intro = "I'm " + firstName + " currently I'm working as a " + job + " and I'm a " + (year - birthYear) + " Years old!";
console.log(intro);


// same using string literals
intro = `I'm ${firstName}, currently working as a ${job} and I'm a ${year - birthYear} years old!`;
console.log(intro);

// normal string using backticks
console.log(`Hello world!`);

// multiple line
console.log("Hello, \nNew line \nimplemented");
console.log(`hello 
new line
implemented`);

// Taking Decisions using If, Else statement

// check the veh driver is above 18 or not

const age = 15;

const isAgeEnough = age >= 18;

// if (check condition){
//     // Do something;
// }

// what if user not then do else thing.

if (isAgeEnough) {
    console.log("user is able to start Driving. 🚗");
} else {
    console.log("user not at the age");
}


if (age >= 18) {
    console.log("user is able to start Driving. 🚗");
} else {
    console.log(`user not allowed to drive the car, you have to wait ${18 - age} year.`);
}

// This is called the control structure.
