// let a = "3";
// let b = "8";

// let c;
// c = a;
// a=b;
// b=c;
// console.log(a,b);

// const message = "Hello"
// let name = prompt("Enter your name: ")
// alert(message + " " + name)

// twitter character counter

// let yourText = prompt("Enter your message:")

// lengthOfMessage= yourText.length

// let totalLength = 140

// // alert("You entered " + lengthOfMessage + " characters" + " and you have " + (totalLength - lengthOfMessage) + " characters left.")
// alert(yourText.slice(0, 140));


// let name = prompt("What is your name? ");

// firstChar = name.slice(0,1).toUpperCase();
// restChar = name.slice(1, name.length).toLowerCase();
// alert("Hello " + firstChar + restChar);

// Dog Age to Human Age 
// let dogAge = 7;
// let humanAge = (dogAge - 2) * 4 +21 ;
// alert(humanAge);


// change the code that accept money and give milk by calculating the money ex milk cost $1.5

// function getMilk(money) { 
// let milk = Math.floor(money / 1.5) ; // round down value 1.99 = 1
// console.log("leaveHouse");
// console.log("moveRight");
// console.log("moveRight");
// console.log("moveUp");
// console.log("moveUp");
// console.log("moveUp");
// console.log("moveUp");
// console.log("moveRight");
// console.log("moveRight");
// console.log("buy " + milk + " bottles of milk");
// console.log("moveLeft");
// console.log("moveLeft");
// console.log("moveDown");
// console.log("moveDown");
// console.log("moveDown");
// console.log("moveDown");
// console.log("moveLeft");
// console.log("moveLeft");
// console.log("enterHouse");
// }

// getMilk(10)

// Bmi Calculator

function bmiCalculator(weight, height){
    let bmi = weight / (height * height);
    return Math.floor(bmi); 
}

console.log("Your Bmi Based on Information is " + bmiCalculator(65, 1.8));