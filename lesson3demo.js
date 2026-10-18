// execute safer and easy to catch bugs
'use strict';

function showSection (title) {
  console.log('\n' + '='.repeat(72));
  console.log(title);
  console.log('='.repeat(72));
} 

function showTopic (title) {
  console.log('\n---' + title + '---');
}

showSection("Topic: Arrays");
showSection("Creating and Accessing Arrays");

// empty array

const emptyArray = [];
const daysOfWeek = [
  "Sunday",
  "Saturday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday"
];

// print the array
console.log("empty array: ", emptyArray);
console.log("days of week: ", daysOfWeek);

console.log("First day: ", daysOfWeek[0]);
console.log("Last day: ", daysOfWeek[daysOfWeek.length - 1]); // accessing the last element of an array

// Array Constructor
const sevenSlots = new Array(7);
const subjects = new Array("DSA", "JavaScript", "Python");

console.log("Array with seven empty slots: ", sevenSlots);
console.log("Array created with values: ", subjects);

showTopic("Iterating through an Array");
// for loop and indices

for (let index = 0; index < daysOfWeek.length; index++) {
  console.log(`Index ${index}: ${daysOfWeek[index]}`);
}

// for...of
for (const day of daysOfWeek) {
  console.log(`Day value: ${day}`);
}

showTopic("Fibonacci sequence");
// create array to hold fibonacci
const fibonacci = [];

fibonacci[1] = 1;
fibonacci[2] = 1;

// compute the next value using for loop
for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for (let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}

showTopic("Adding Elements")
const numbersForAdding = [0,1,2,3,4,];
// add number at the next free index
numbersForAdding[numbersForAdding.length] = 5;

numbersForAdding.push(6,7); // add at the end
numbersForAdding.unshift(-2, -1); // add at the beginning

console.log("Numbers after operation: " + numbersForAdding)

showTopic("Removing Elements")
const numbersForRemoving = [10,20,30,40,50];

// remove and return last element
const removedLast = numbersForRemoving.pop(); // pop is for removing last
// remove and return first element
const removedFirst = numbersForRemoving.shift(); // shift is for removing first

console.log("Removed from the start: " + removedFirst);
console.log("Removed from the end: " + removedLast);
console.log("after pop: " + numbersForRemoving);

showTopic("Using splice at the specific position");
const spliceNumbers = [0, 1, 2, 3, 4, 5, 6];
// remove and return 3 elements
const removedBySplice = spliceNumbers.splice(2, 3);

console.log("values removed by splice: " + removedBySplice);
console.log("after removal: " + spliceNumbers);

// insert 2,3,4 at index 2
spliceNumbers.splice(2, 0, 2,3,4);
console.log("after insertion: " + spliceNumbers);

// replace value beginning at index 2
spliceNumbers.splice(2,0, 20,30,40);
console.log("after replacement: " + spliceNumbers);

showTopic('Two-Dimensional Array');

// Each inner array represents one row or one day of temperature readings

const averageTemp = [
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7]
];

// access row zero and column 2
console.log("Day 1, reading 3: " + averageTemp[0][2]);

// print every cell of 2d array
function printMatrix(matrix) {
  // outer loop visits the row
  for (let row = 0; row < matrix.length; row++) {
    // inner loop visits column
    for (let column = 0; column < matrix[row].length; column++) {
      console.log("Row ", row, "Column" ,column, ":" , matrix[row][column]);
    }
  }
}

// traverse the 2d array
printMatrix(averageTemp);

showTopic("Three-Dimensional Array")
// create 3x3x3 structure
const matrix3x3x3 = [];
// build and fill array
for (let row = 0; row < 3; row++) {
  matrix3x3x3[row] = [];
  for (let column = 0; column < 3; column++) {
    matrix3x3x3[row][column] = [];
    for (let dept = 0; dept < 3; dept++) {
      matrix3x3x3[row][column][dept] = row + column + dept;
    }
  } 
}

// display the complete array
console.log("3x3x3 array: " , matrix3x3x3)
console.log("value at [2][1][0]: " , matrix3x3x3[2][1][0]);

showTopic('Joining Arrays with concat')
const negativeNum = [-3, -2, -1];
const zero = 0;
const positiveNum = [1, 2, 3];

const joinedNum = negativeNum.concat(zero,positiveNum); // use concat to combine arrays
console.log("joined numbers: " , joinedNum);

showTopic("Every, some, and for each: visiting arrays");
const numbers1to15 = [];

for (let index = 1; index < 16; index++) {
  numbers1to15[index - 1] = index;
}

// return true when a number is divisible by 2
const isEven = number => number % 2 === 0;

// if every element satisfies the condition
console.log("Are all values even? " ,numbers1to15.every(isEven));

// some asks whether at least one element satisfies the condition
console.log("Is at least one value is even? " ,numbers1to15.some(isEven));

// for each performs an action once for every element
numbers1to15.forEach(number => {
    console.log(number, 'is', isEven(number) ? 'even' : 'odd');
});

showTopic('Transforming, filtering, and reducing');

// map creates one result for every original element
const evenTests = numbers1to15.map(isEven);
console.log('result of map: ' , evenTests);

// filter keeps only the elements that pass the condition
const evenNumbers = numbers1to15.filter(isEven);
console.log('result of filter: ' , evenNumbers);

// reduce which combines all elements into one accumulated result
const total = numbers1to15.reduce((runningTotal, number) => {
  return runningTotal + number;
});
console.log('result of reduce: ' , total);


showTopic("Array Iterators");
// return key value pairs using for loop
for (const [index, value] of subjects.entries()) {
    console.log('Entry -> index: ' ,index , 'value', value);
}

// keys return only  the index
for (const index of subjects.keys()) {
    console.log('key: ' , index);
}
for (const value of subjects.values()) {
    console.log('value: ', value);
}

// obtain the array's iterator directly through symbol .iterator
const subjectIterator = subjects[Symbol.iterator]();

// retrieve the first two iterator results manually
console.log('First iterator result: ' , subjectIterator.next());
console.log('Second iterator result: ' , subjectIterator.next()); 

showTopic(' Creating, filling, and copying arrays');
//copying
const copiedSub = Array.from(subjects);

// created array from supplied arguments
const createdNum = Array.of(1,2,3,4,5,6);

// create an array of length 6 and fill every position with 1
const one = Array(6).fill(1);

console.log('Array.from result: ', copiedSub);
console.log('Array.of result: ', createdNum);
console.log('fill result: ', one);