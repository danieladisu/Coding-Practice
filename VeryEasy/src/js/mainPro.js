
// mainPor.js

// // ======= Start ====== Find the Perimeter of a Rectangle======================= //

// // Understand the problem statement
// // 1. take the length and width of a rectangle as arguments
// // 2. calculate the perimeter of the rectangle
// // 3. return the perimeter of the rectangle

// // Solve it on paper
// // write the formula for the perimeter of a rectangle
// // perimeter = 2 * (length + width)

// // Write the pseudo code line by line
// // 1. start the function findPerimeter
// // 2. take the length and width of a rectangle as arguments
// // 3. calculate the perimeter of the rectangle
// // 4. return the perimeter of the rectangle

// // Translate pseudo code to JavaScript
// function findPerimeter(length, width) {
//     return 2 * (length + width);
//     // or
//     // let perimeter = 2 * (length + width);
//     // return perimeter;
// }

// // Test and debug
// console.log(findPerimeter(6, 7)); // 26
// console.log(findPerimeter(20, 10)); // 60
// console.log(findPerimeter(2, 9)); // 22

// // unit test function
// function testFindPerimeter() {
//     console.log(findPerimeter(6, 7) === 26);
//     console.log(findPerimeter(20, 10) === 60);
//     console.log(findPerimeter(2, 9) === 22);
// }

// testFindPerimeter();

// // ======= End ====== Find the Perimeter of a Rectangle======================= //

// // // // ================= start ===== Return Something to Me! ======================= //
// // Understand the problem statement
// // the problem is to return a string that is passed as an argument
// // example: greet("Hello") => "Hello"

// // Solve it on paper
// // write  a function that takes a string as an argument
// // return the string

// // Write the pseudo code line by line
// // 1. start the function greet
// // 2. take a string as an argument
// // 3. return the string

// // Translate pseudo code to JavaScript
// function giveMeSomething(a) {
//     return 'something '+ a;
// }

// // Test and debug
// console.log(giveMeSomething("Hello")); // Hello
// console.log(giveMeSomething("Hi")); // Hi
// console.log(giveMeSomething("Good Morning")); // Good Morning

// // unit test function
// function testGreet() {
//     console.log(giveMeSomething("Hello") === "Hello");
//     console.log(giveMeSomething("Hi") === "Hi");
//     console.log(giveMeSomething("Good Morning") === "Good Morning");
// }

// testGreet();

// // ================= End ===== Return Something to Me! ======================= //

// // ======== start ==== Is the Number Less than or Equal to Zero? =============== //
// // Understand the problem statement
// // the problem is to check if a number is less than or equal to zero
// // example: lessThanOrEqualToZero(5) => false
// // example: lessThanOrEqualToZero(0) => true
// // example: lessThanOrEqualToZero(-2) => true

// // Solve it on paper
// // write a function that takes a number as an argument
// // check if the number is less than or equal to zero
// // return true if the number is less than or equal to zero
// // return false if the number is greater than zero

// // Write the pseudo code line by line
// // 1. start the function lessThanOrEqualToZero
// // 2. take a number as an argument
// // 3. check if the number is less than or equal to zero
// // 4. return true if the number is less than or equal to zero

// // Translate pseudo code to JavaScript
// function lessThanOrEqualToZero(num) {
//     return num <= 0;
// }

// // Test and debug
// console.log(lessThanOrEqualToZero(5)); // false
// console.log(lessThanOrEqualToZero(0)); // true
// console.log(lessThanOrEqualToZero(-2)); // true

// // unit test function
// function testLessThanOrEqualToZero() {
//     console.log(lessThanOrEqualToZero(5) === false);
//     console.log(lessThanOrEqualToZero(0) === true);
//     console.log(lessThanOrEqualToZero(-2) === true);
// }

// testLessThanOrEqualToZero();

// // ======== End ==== Is the Number Less than or Equal to Zero? =============== //

// ====== Start ==== Sum of Polygon Angles =============== //
// Understand the problem statement
// the problem is to find the sum of the interior angles of a polygon
// example: sumPolygon(3) => 180
// example: sumPolygon(4) => 360
// example: sumPolygon(6) => 720

// Solve it on paper
// write a function that takes the number of sides of a polygon as an argument
// calculate the sum of the interior angles of the polygon
// return the sum of the interior angles of the polygon

// Write the pseudo code line by line
// 1. start the function sumPolygon
// 2. take the number of sides of a polygon as an argument
// 3. calculate the sum of the interior angles of the polygon
// 4. return the sum of the interior angles of the polygon

// Translate pseudo code to JavaScript
function sumPolygon(n) {
    return (n - 2) * 180; 
    // or
    // let n = -2;
    // sum = n * 180;
    // return sum;
}

// Test and debug
console.log(sumPolygon(3)); // 180
console.log(sumPolygon(4)); // 360
console.log(sumPolygon(6)); // 720

// unit test function
function testSumPolygon() {
    console.log(sumPolygon(3) === 180);
    console.log(sumPolygon(4) === 360);
    console.log(sumPolygon(6) === 720);
}

testSumPolygon();

// ====== End ==== Sum of Polygon Angles =============== //

console.log("====== Start ==== Football Points ===============")
// Understand the problem statement
// the problem is to calculate the total points scored by a football team
// example: footballPoints(3, 4, 2) => 13
// example: footballPoints(5, 0, 2) => 15
// example: footballPoints(0, 0, 1) => 0

// Solve it on paper
// write a function that takes the number of wins, draws, and losses as arguments
// calculate the total points scored by the football team
// return the total points scored by the football team

// Write the pseudo code line by line
// 1. start the function footballPoints
// 2. take the number of wins, draws, and losses as arguments
// 3. calculate the total points scored by the football team

// Translate pseudo code to JavaScript
function footballPoints(wins, draws, losses) {
    return (wins * 3) + (draws * 1) + (losses * 0);
}

// Test and debug
console.log(footballPoints(3, 4, 2)); // 13
console.log(footballPoints(5, 0, 2)); // 15
console.log(footballPoints(0, 0, 1)); // 0

// Unit test function
function testFootballPoints() {
    console.log(footballPoints(3, 4, 2) === 13);
    console.log(footballPoints(5, 0, 2) === 15);
    console.log(footballPoints(0, 0, 1) === 0);
}

testFootballPoints();

console.log("====== End ==== Football Points ===============")

console.log("====== Start ==== Convert Hours and Minutes into Seconds ===============")
// Understand the problem statement
// the problem is to convert hours and minutes into seconds
// example: convert(1, 3) => 3780

// Solve it on paper
// write a function that takes hours and minutes as arguments
// calculate the total seconds
// return the total seconds

// Write the pseudo code line by line
// 1. start the function convert
// 2. take hours and minutes as arguments
// 3. calculate the total seconds
// 4. return the total seconds

// Translate pseudo code to JavaScript
function convert(hours, minutes) {
    return (hours * 3600) + (minutes * 60);
// or 
// let oneHours = 3600;
// let oneMinutes = 60;
// let totalSeconds = (hours * oneHours) + (minutes * oneMinutes);
// return totalSeconds;
}


// Test and debug
console.log(convert(1, 3)); // 3780

// Unit test function
function testConvert() {
    console.log(convert(1, 3) === 3780);
}

testConvert();

console.log("====== End ==== Convert Hours and Minutes into Seconds ===============")

console.log("====== Start ==== Buggy Code (Part 5) =======")
// Understand the problem statement
// the problem is to fix the code
// example: has_bugs(1) => true
// example: has_bugs(0) => false

// Solve it on paper
// write a function that takes a number as an argument
// check if the number is equal to 0
// return true if the number is equal to 0
// return false if the number is not equal to 0

// Write the pseudo code line by line
// 1. start the function has_bugs
// 2. take a number as an argument
// 3. check if the number is equal to 0
// 4. return true if the number is equal to 0

// Translate pseudo code to JavaScript
function printArray(number) {
    let newArray = [];
    for (let i = 1; i <= number; i++) {
        newArray.push(i);
    }
    return newArray;
}

// Test and debug
console.log(printArray(5)); // [1]
console.log(printArray(0)); // []

// Unit test function
function testPrintArray() {
    console.log(printArray(1).join('') === '1');
    console.log(printArray(0).join('') === '');
}

testPrintArray();

console.log("====== End ==== Buggy Code (Part 5) =======")

console.log("====== Start ==== Less Than 100?  =======")

// Understand the problem statement
// The problem is to check if the sum of two numbers is less than 100.
// 1. take two numbers as arguments
// 2. check if the sum of two numbers is less than 100
// 3. return true if the sum of two numbers is less than 100, otherwise return false

// Solve it on paper
// 1. take two numbers as arguments
// 2. check if the sum of two numbers is less than 100
// 3. return true if the sum of two numbers is less than 100, otherwise return false

// Write the pseudo code line by line
// 1. start the function lessThan100
// 2. give numbers a and b as arguments
// 3. check if the sum of a and b is less than 100
// 4. return true if the sum of a and b is less than 100, otherwise return false

// Translate pseudo code to JavaScript
function lessThan100(a, b) {
    return a + b < 100;
    // or 
    // let sum = a + b;
    // return sum < 100;

}

// Test and debug
console.log(lessThan100(22, 15)); // true
console.log(lessThan100(83, 34)); // false
console.log(lessThan100(3, 77)); // true

// Unit test function
function testLessThan100() {
    console.log(lessThan100(22, 15) === true);
    console.log(lessThan100(83, 34) === false);
    console.log(lessThan100(3, 77) === true);
}

testLessThan100();

console.log("====== End ==== Less Than 100?  =======")

console.log("====== Start ==== Are the Numbers Equal? =======")

// Understand the problem statement
// The problem is to check if two numbers are equal
// 1. take two numbers as arguments
// 2. check if the two numbers are equal
// 3. return true if the two numbers are equal, otherwise return false

// Solve it on paper
// 1. take two numbers as arguments
// 2. check if the two numbers are equal
// 3. return true if the two numbers are equal, otherwise return false

// Write the pseudo code line by line
// 1. start the function isSameNum
// 2. give numbers a and b as arguments
// 3. check if the two numbers are equal
// 4. return true if the two numbers are equal, otherwise return false

// Translate pseudo code to JavaScript
function isSameNum(num1, num2) {
    return num1 === num2;
}

// Test and debug
console.log(isSameNum(4, 8)); // false
console.log(isSameNum(2, 2)); // true
console.log(isSameNum(0, 6)); // false

// Unit test function
function testIsSameNum() {
    console.log(isSameNum(4, 8) === false);
    console.log(isSameNum(2, 2) === true);
    console.log(isSameNum(0, 6) === false);
}

testIsSameNum();

console.log("====== End ==== Are the Numbers Equal? =======")











