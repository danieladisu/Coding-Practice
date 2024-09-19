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

