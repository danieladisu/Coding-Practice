// Esay 


console.log("====== Start ==== Bitwise Operations =======")

// Understand the problem statement
// Bitwise operations are operations that directly manipulate bits.
// They are used in places where we need to manipulate bits directly.
// Bitwise operations are used in places where we need to manipulate bits directly.

// Solve it on paper
// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.
// 1. take two numbers as arguments
// 2. calculate the bitwise AND of two numbers
// 3. calculate the bitwise OR of two numbers
// 4. calculate the bitwise XOR of two numbers
// 5. return the result of the bitwise AND, OR and XOR of two numbers

// Write the pseudo code line by line
// 1. start the function bitwiseAND
// 2. take two numbers as arguments
// 3. calculate the bitwise AND of two numbers
// 4. return the result of the bitwise AND of two numbers

// 1. start the function bitwiseOR  
// 2. take two numbers as arguments
// 3. calculate the bitwise OR of two numbers
// 4. return the result of the bitwise OR of two numbers

// 1. start the function bitwiseXOR
// 2. take two numbers as arguments
// 3. calculate the bitwise XOR of two numbers
// 4. return the result of the bitwise XOR of two numbers

// Translate pseudo code to JavaScript
function bitwiseAND(n1, n2) {
    return n1 & n2;
}

function bitwiseOR(n1, n2) {
    return n1 | n2;
}

function bitwiseXOR(n1, n2) {
    return n1 ^ n2;
}

// Test and debug
console.log(bitwiseAND(7, 12)); // 4
console.log(bitwiseOR(7, 12)); // 15
console.log(bitwiseXOR(7, 12)); // 11

// Unit test function
function testBitwiseOperations() {
    console.log(bitwiseAND(7, 12) === 4);
    console.log(bitwiseOR(7, 12) === 15);
    console.log(bitwiseXOR(7, 12) === 11);
}

testBitwiseOperations();

console.log("====== End ==== Bitwise Operations =======")

console.log("====== Start === Fix the Expression ====")
// Fix the code in the Code tab so the function returns true if and only if x is equal to 7.
// Understand the problem statement
// the problem is to fix the code
// example: isSeven(4) => false
// example: isSeven(9) => false
// example: isSeven(7) => true

// Solve it on paper
// write a function that takes a number as an argument
// check if the number is equal to 7
// return true if the number is equal to 7, otherwise return false

// Write the pseudo code line by line
// 1. start the function isSeven
// 2. take a number as an argument
// 3. check if the number is equal to 7
// 4. return true if the number is equal to 7, otherwise return false

// Translate pseudo code to JavaScript
function isSeven(x) {
    return x === 7;
    // or
    // if (x === 7) {
    //     return true;
    // } else {
    //     return false;
    // }
    // or
    // x === 7 ? true : false;
}

// Test and debug
console.log(isSeven(4)); // false
console.log(isSeven(9)); // false
console.log(isSeven(7)); // true

// Unit test function
function testIsSeven() {
    console.log(isSeven(4) === false);
    console.log(isSeven(9) === false);
    console.log(isSeven(7) === true);
}

testIsSeven();

console.log("====== End === Fix the Expression ====")

// Day 2 commit starts here
// Add up the Numbers from a Single Number
console.log("====== Start === Add up the Numbers from a Single Number ====")
// Understand the problem statement
// The problem is to add up all the numbers from 1 to the number you passed to the function.
// example: addUp(4) => 10
// example: addUp(13) => 91
// example: addUp(600) => 180300


// Solve it on paper
// write a function that takes a number as an argument
// add up all the numbers from 1 to the number you passed to the function
// return the sum of all the numbers from 1 to the number you passed to the function

// Write the pseudo code line by line
// 1. start the function addUp
// 2. take a number as an argument
// 3. add up all the numbers from 1 to the number you passed to the function
// 4. return the sum of all the numbers from 1 to the number you passed to the function


// Translate pseudo code to JavaScript
function addUp(num) {
    return num * (num + 1) / 2;
}

// Test and debug
console.log(addUp(4)); // 10
console.log(addUp(13)); // 91
console.log(addUp(600)); // 180300

// Unit test function
function testAddUp() {
    console.log(addUp(4) === 10);
    console.log(addUp(13) === 91);
    console.log(addUp(600) === 180300);
}

testAddUp();

console.log("====== End === Add up the Numbers from a Single Number ====")

// Buggy Code (Part 4)
console.log("====== Start === Buggy Code (Part 4) ====")
// Understand the problem statement
// The code is almost working but the problem is that the function is not returning the correct values.
// example: maxNum(3, 7) => 7
// example: maxNum(-1, 0) => 0
// example: maxNum(1000, 400) => 1000

// Solve it on paper
// write a function that takes two numbers as arguments
// compare the two numbers
// return the maximum number

// Write the pseudo code line by line
// 1. start the function maxNum
// 2. take two numbers as arguments
// 3. compare the two numbers
// 4. return the maximum number

// Translate pseudo code to JavaScript
function maxNum(n1, n2) {
    return Math.max(n1, n2);

    // or
    // if (n1 > n2) {
    //     return n1;
    // } else {
    //     return n2;
    // }
    // or
    // return n1 > n2 ? n1 : n2;

}

// Test and debug
console.log(maxNum(3, 7)); // 7
console.log(maxNum(-1, 0)); // 0
console.log(maxNum(1000, 400)); // 1000

// Unit test function
function testMaxNum() {
    console.log(maxNum(3, 7) === 7);
    console.log(maxNum(-1, 0) === 0);
    console.log(maxNum(1000, 400) === 1000);
}

testMaxNum();

console.log("====== End === Buggy Code (Part 4) ====")
// greeting
console.log("====== Start === greeting ====")
// Understand the problem statement
// The problem is to write a function that takes a name as an argument and returns a greeting message.
// example: greeting("Mubashir") => "Hello, my Love!"
// example: greeting("Matt") => "Hello, Matt!"

// Solve it on paper
// write a function that takes a name as an argument
// check if the name is equal to "Mubashir"
// return "Hello, my Love!" if the name is equal to "Mubashir", otherwise return "Hello, " + name + "!"

// Write the pseudo code line by line
// 1. start the function greeting
// 2. take a name as an argument
// 3. check if the name is equal to "Mubashir"
// 4. return "Hello, my Love!" if the name is equal to "Mubashir", otherwise return "Hello, " + name + "!"

// Translate pseudo code to JavaScript
function greeting(name) {
    return name === "Mubashir" ? "Hello, my Love!" : "Hello, " + name + "!";
    // or
    // if(name === "Mubashir") {
    //     return "Hello, my Love!";
    // }else{
    //     return "Hello, " + name + "!";
    // }
}

// Test and debug
console.log(greeting("Mubashir")); // "Hello, my Love!"
console.log(greeting("Matt")); // "Hello, Matt!"

// Unit test function
function testGreeting() {
    console.log(greeting("Mubashir") === "Hello, my Love!");
    console.log(greeting("Matt") === "Hello, Matt!");
}

testGreeting();


console.log("====== End === greeting ====")

// Using Arrow Functions
console.log("====== Start === Using Arrow Functions ====")
//Create a function that returns the given argument, but by using an arrow function.
// Understand the problem statement
// The problem is to write a function that returns the given argument, but by using an arrow function.
// example: returnArg("hello") => "hello"
// example: returnArg(10) => 10

// Solve it on paper
// write a function that takes an argument
// return the given argument

// Write the pseudo code line by line
// 1. start the function returnArg
// 2. take an argument
// 3. return the given argument

// Translate pseudo code to JavaScript

const returnArg = (arg) => {
    return arg;
}


// Test and debug
console.log(returnArg("hello")); // "hello"
console.log(returnArg(10)); // 10

// Unit test function
function testReturnArg() {
    console.log(returnArg("hello") === "hello");
    console.log(returnArg(10) === 10);
}

// End 

// Day 3 commit started hier 



// Matchstick Houses
// Understand the problem statement
// the problem is to calculate the number of matchsticks in the house
// example: matchHouses(1) => 6
// example: matchHouses(4) => 21
// example: matchHouses(87) => 436

// Solve it on paper
// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
// Write a function that takes a number as an argument
// calculate the number of matchsticks in the house
// return the number of matchsticks in the house

// Write the pseudo code line by line
// 1. start the function matchHouses
// 2. take a number as an argument
// 3. calculate the number of matchsticks in the house
// 4. return the number of matchsticks in the house

// Translate pseudo code to JavaScript
function matchHouses(step) {
    return step === 0 ? 0 : (step * 5) + 1;
}

// Test and debug
console.log(matchHouses(1)); // 6
console.log(matchHouses(2)); // 11
console.log(matchHouses(3)); // 16

// Unit test function
function testMatchHouses() {
    console.log(matchHouses(1) === 6);
    console.log(matchHouses(2) === 11);
    console.log(matchHouses(3) === 16);
}

testMatchHouses();

console.log("====== End === Using Arrow Functions ====")


// Buggy Code (Part 7)
// Mubashir wants to swap two given numbers!

// It is not returning the right values. Can you help him fix it?
console.log("====== Start === Buggy Code (Part 7) ====")
// Understand the problem statement
// the problem is to swap two given numbers
// example: swap(100, 200) => [200, 100]
// example: swap(44, 33) => [33, 44]
// example: swap(21, 12) => [12, 21]

// Solve it on paper
// write a function that takes two numbers as arguments
// swap the two numbers
// return the swapped numbers

// Write the pseudo code line by line
// 1. start the function swap
// 2. take two numbers as arguments
// 3. swap the two numbers
// 4. return the swapped numbers

// Translate pseudo code to JavaScript
function swap(a, b) {
    return [b, a];
}

// Test and debug
console.log(swap(100, 200)); // [200, 100]
console.log(swap(44, 33)); // [33, 44]
console.log(swap(21, 12)); // [12, 21]

// Unit test function
function testSwap() {
    console.log(swap(100, 200).toString() === [200, 100].toString());
    console.log(swap(44, 33).toString() === [33, 44].toString());
    console.log(swap(21, 12).toString() === [12, 21].toString());
}

testSwap();

console.log("====== End === Buggy Code (Part 7) ====")

// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
console.log("====== Start === Frames Per Second ====")
// Understand the problem statement
// the problem is to calculate the number of frames shown in a given number of minutes for a certain FPS.
// example: frames(1, 1) => 60
// example: frames(10, 1) => 600
// example: frames(10, 25) => 15000

// Solve it on paper
// write a function that takes two numbers as arguments
// calculate the number of frames shown in a given number of minutes for a certain FPS
// return the number of frames shown in a given number of minutes for a certain FPS

// Write the pseudo code line by line
// 1. function frames
// 2. Arguments: minutes, fps
// 3. calculate: minutes * fps * 60
// 4. Save the result: result
// 5. return result

// Translate pseudo code to JavaScript
function frames(minutes, fps) {
    return minutes * fps * 60;
}

// Test and debug
console.log(frames(1, 1)); // 60
console.log(frames(10, 1)); // 600
console.log(frames(10, 25)); // 15000

// Unit test function
function testFrames() {
    console.log(frames(1, 1) === 60);
    console.log(frames(10, 1) === 600);
    console.log(frames(10, 25) === 15000);
}

testFrames();

console.log("====== End === Frames Per Second ====")

// Miserable Parody of a Calculator
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.

console.log("====== Start === Miserable Parody of a Calculator ====")
// Understand the problem statement
// the problem is to handle simple math expressions
// example: calculator("23+4") => 27
// example: calculator("45-15") => 30
// example: calculator("13+2-5*2") => 5

// Solve it on paper
// write a function that takes a string as an argument
// handle simple math expressions
// return the result of the math expressions



// Write the pseudo code line by line
// 1. function calculator
// 2. Arguments: str
// 3. calculate  the result of the math expressions
// 4. Save the result: result
// 5. return result

// Translate pseudo code to JavaScript
function calculator(str) {
    return eval(str);
    // or without eval
    // return new Function('return ' + str)();
    // How to work eval ? : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

    


}

// Test and debug
console.log(calculator("23+4")); // 27
console.log(calculator("45-15")); // 30
console.log(calculator("13+2-5*2")); // 5

// Unit test function
function testCalculator() {
    console.log(calculator("23+4") === 27);
    console.log(calculator("45-15") === 30);
    console.log(calculator("13+2-5*2") === 5);
}

testCalculator();

console.log("====== End === Miserable Parody of a Calculator ====")






