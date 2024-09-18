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
