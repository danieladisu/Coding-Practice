/*
Algorithmic thinking

    what is algorithm?
        An algorithm is a specific procedure for solving a well-defined computational problem.
        Algorithm is a procedure or formula used for solving a problem.
    how to solve algorithmic problems?

        Steps to follow when solving an algorithmic problem:
            1. Understand the problem statement.
            2. Solve it on paper.
            3. Write the pseudo code line by line.
            4. Translate pseudo code to JavaScript.
            5. Test and debug.

            6. Write useful comments in your code.

            7. Practice, practice, practice

            ===================
            Übersetzungsergebnisse
            Übersetzung
            Verstehe die Problemstellung.
            Lösen Sie es auf Papier.
            Schreiben Sie den Pseudocode Zeile für Zeile.
            Pseudocode in JavaScript übersetzen.
            Testen und debuggen.
            
            Schreiben Sie nützliche Kommentare in Ihren Code.
            Üben, üben, üben


*/

// =============== VeryEasy/enfach/src/js/main.js ===============//

// Convert Age to Days
//Create a function that takes the age in years and returns the age in days.

// age = 18;
// day = age * 365;

// function calcAge(age) {

//     let day = age * 365;
//     return day;
	
// }

// console.log(calcAge(65)); // ➞ 23725
// console.log(calcAge(0)); // ➞ 0
// console.log(calcAge(20)); // ➞ 7300

// =============== VeryEasy/enfach/src/js/main.js ===============//

// Maximum Edge of a Triangle
// Create a function that finds the maximum range of a triangle's third edge.

// Notes
// (side1 + side2) - 1 = maximum range of third edge.
// The side lengths of the triangle are positive integers.
// Don't forget to return the result.

// understand the problem statement
// 1. take two sides of a triangle as arguments
// 2. find the maximum range of the third edge
// 3. return the maximum range of the third edge

// solve it on paper
// 1. take two sides of a triangle as arguments
// 2. find the maximum range of the third edge
// 3. return the maximum range of the third edge

// write the pseudo code line by line
// 1. start the function nextEdge
// 2. take two sides of a triangle as arguments
// 3. find the maximum range of the third edge
// 4. return the maximum range of the third edge

// translate pseudo code to JavaScript
// function nextEdge(side1, side2) {
//     return (side1 + side2) - 1;
// }

// // test and debug
// console.log(nextEdge(8, 10)); // 17
// console.log(nextEdge(5, 7)); // 11
// console.log(nextEdge(9, 2)); // 10

// =============== VeryEasy/enfach/src/js/main.js ===============// 

// Football Points
// ========= Football Points =========//
// Understand the problem statement
// 1. take the number of wins, draws, and losses as arguments
// 2. calculate the total number of points scored by a football team
// 3. return the total number of points scored by a football team

// Solve it on paper 
// 1. take the number of wins, draws, and losses as arguments
// 2. calculate the total number of points scored by a football team
// 3. return the total number of points scored by a football team

// Write the pseudo code line by line
// 1. start the function footballPoints
// 2. take the number of wins, draws, and losses as arguments
// 3. calculate the total number of points scored by a football team
// 4. return the total number of points scored by a football team

// Translate pseudo code to JavaScript
// function footballPoints(wins, draws, losses) {
//     return (wins * 3) + draws;
// }

// // Test and debug
// console.log(footballPoints(3, 4, 2)); // 13
// console.log(footballPoints(5, 0, 2)); // 15
// console.log(footballPoints(0, 0, 1)); // 0

// // === VeryEasy/enfach/src/js/main.js ===//
// // =======Matchstick Houses=======//
// // Understand the problem statement
// // 1. take the number of matchsticks as an argument
// // 2. calculate the number of matchstick houses that can be built
// // 3. return the number of matchstick houses that can be built

// // Solve it on paper
// // 1. take the number of matchsticks as an argument
// // 2. calculate the number of matchstick houses that can be built
// // 3. return the number of matchstick houses that can be built

// // Write the pseudo code line by line
// // 1. start the function matchHouses
// // 2. take the number of matchsticks as an argument
// // 3. calculate the number of matchstick houses that can be built
// // 4. return the number of matchstick houses that can be built

// // Translate pseudo code to JavaScript
// function matchHouses(step) {
//     // return step === 0 ? 0 : (step * 6) - 1;
//     if (step === 0) {
//         return 0;
//     } else {
//         return (step * 5) + 1;
//     }
// }

// // Test and debug
// console.log(matchHouses(1)); // 6
// console.log(matchHouses(2)); // 11
// console.log(matchHouses(3)); // 16

// // =============Less Than 100?================== ///

// // Understand the problem statement
// // 1. take two numbers as arguments
// // 2. check if the sum of two numbers is less than 100
// // 3. return true if the sum of two numbers is less than 100, otherwise return false

// // Solve it on paper
// // 1. take two numbers as arguments
// // 2. check if the sum of two numbers is less than 100
// // 3. return true if the sum of two numbers is less than 100, otherwise return false

// // Write the pseudo code line by line
// // 1. start the function lessThan100    
// // 2. take two numbers as arguments
// // 3. check if the sum of two numbers is less than 100

// // Translate pseudo code to JavaScript
// function lessThan100(a, b) {
//     return a + b < 100;
// }

// // Test and debug
// console.log(lessThan100(22, 15)); // true
// console.log(lessThan100(83, 34)); // false
// console.log(lessThan100(3, 77)); // true

// =============Buggy Code (Part 5)================== ///
 
// // Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// // Examples
// // printArray(1) ➞ [1]

// // printArray(3) ➞ [1, 2, 3]

// // printArray(6) ➞ [1, 2, 3, 4, 5, 6]
// // Notes
// // READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// // Don't overthink this challenge; it's not supposed to be hard.

// // Understand the problem statement
// // 1. take a number as an argument
// // 2. create an array of numbers from 1 to the given number
// // 3. return the array of numbers

// // Solve it on paper
// // 1. take a number as an argument
// // 2. create an array of numbers from 1 to the given number
// // 3. return the array of numbers

// // Write the pseudo code line by line
// // 1. start the function printArray
// // 2. take a number as an argument
// // 3. create an array of numbers from 1 to the given number
// // 4. return the array of numbers

// // Translate pseudo code to JavaScript
// // printArray with while loop
// function printArray(number) {
//     let arr = [];
//     let i = 1;
//     while (i <= number) {
//         arr.push(i);
//         i++;
//     }
//     return arr;

// }

// // Test and debug
// console.log(printArray(1)); // [1]
// console.log(printArray(3)); // [1, 2, 3]
// console.log(printArray(6)); // [1, 2, 3, 4, 5, 6]


// // printArray with for loop
// function printArray(number) {
//     let arr = [];
//     for (let i = 1; i <= number; i++){
//         arr.push(i);
//     }
//     return arr;
// }

// // Test and debug
// console.log(printArray(1)); // [1]
// console.log(printArray(3)); // [1, 2, 3]
// console.log(printArray(6)); // [1, 2, 3, 4, 5, 6]

// // ============The Farm Problem=================== ///

// // In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// // chickens = 2 legs
// // cows = 4 legs
// // pigs = 4 legs

// // The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// // Understand the problem statement
// // 1. take the number of chickens, cows, and pigs as arguments
// // 2. calculate the total number of legs of all the animals
// // 3. return the total number of legs of all the animals

// // Solve it on paper
// // 1. take the number of chickens, cows, and pigs as arguments
// // 2. calculate the total number of legs of all the animals
// // 3. return the total number of legs of all the animals

// // Write the pseudo code line by line
// // 1. start the function animals

// // 2. take the number of chickens, cows, and pigs as arguments
// // 3. calculate the total number of legs of all the animals
// // 4. return the total number of legs of all the animals

// // Translate pseudo code to JavaScript
// function animals (chickens, cows, pigs){
   
//     return (chickens * 2) + (cows * 4) + (pigs * 4);
//      // or 
//     // let chickenLegs = chickens * 2;
//     // let cowLegs = cows * 4;
//     // let pigLegs = pigs * 4;
//     // return chickenLegs + cowLegs + pigLegs; 

// }

// // Test and debug
// console.log(animals(2, 3, 5)); // 36
// console.log(animals(1, 2, 3)); // 22
// console.log(animals(5, 2, 8)); // 50

// // =============Football Points======================= //

// // Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// // wins get 3 points
// // draws get 1 point
// // losses get 0 points

// // Understand the problem statement
// // 1. take the number of wins, draws, and losses as arguments
// // 2. calculate the total number of points scored by a football team    
// // 3. return the total number of points scored by a football team

// // Solve it on paper
// // 1. take the number of wins, draws, and losses as arguments
// // 2. calculate the total number of points scored by a football team
// // 3. return the total number of points scored by a football team

// // Write the pseudo code line by line
// // 1. start the function footballPoints
// // 2. take the number of wins, draws, and losses as arguments
// // 3. calculate the total number of points scored by a football team
// // 4. return the total number of points scored by a football team

// // Translate pseudo code to JavaScript
// function footballPoints(wins, draws, losses) {
//     return (wins * 3) + draws;
//     // or 
//     // let winPoints = wins * 3;
//     // let drawPoints = draws * 1;
//     // return winPoints + drawPoints;

// }

// // Test and debug
// console.log(footballPoints(3, 4, 2)); // 13
// console.log(footballPoints(5, 0, 2)); // 15
// console.log(footballPoints(0, 0, 1)); // 0

// ==================================== //
// Convert Hours into Seconds
// Write a function that converts hours into seconds.

// Understand the problem statement
// 1. take the number of hours as an argument
// 2. convert hours into seconds
// 3. return the number of seconds

// Solve it on paper
// 1. take the number of hours as an argument
// 2. convert hours into seconds
// 3. return the number of seconds

// Write the pseudo code line by line
// 1. start the function howManySeconds
// 2. take the number of hours as an argument
// 3. convert hours into seconds
// 4. return the number of seconds

// Translate pseudo code to JavaScript
function howManySeconds(hours) {
    return hours * 3600;
    // or
    // let seconds = hours * 60 * 60;
    // return seconds;
}

// Test and debug
console.log(howManySeconds(2)); // 7200
console.log(howManySeconds(10)); // 36000
console.log(howManySeconds(24)); // 86400


// ======= Start ====== Find the Perimeter of a Rectangle======================= //

// Understand the problem statement
// 1. take the length and width of a rectangle as arguments
// 2. calculate the perimeter of the rectangle
// 3. return the perimeter of the rectangle

// Solve it on paper
// write the formula for the perimeter of a rectangle
// perimeter = 2 * (length + width)

// Write the pseudo code line by line
// 1. start the function findPerimeter
// 2. take the length and width of a rectangle as arguments
// 3. calculate the perimeter of the rectangle
// 4. return the perimeter of the rectangle

// Translate pseudo code to JavaScript
function findPerimeter(length, width) {
    return 2 * (length + width);
    // or
    // let perimeter = 2 * (length + width);
    // return perimeter;
}

// Test and debug
console.log(findPerimeter(6, 7)); // 26
console.log(findPerimeter(20, 10)); // 60
console.log(findPerimeter(2, 9)); // 22

// ======= End ====== Find the Perimeter of a Rectangle======================= //

// ======= Start ====== Less Than 100 ======================= //

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

// ======= End ====== Less Than 100 ======================= //  


