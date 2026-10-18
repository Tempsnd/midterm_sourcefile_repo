// variables
/**
let score = 90;
score = 95;
const student_name ="Juan";

console.log(score);
console.log(student_name);
*/

// Common javascript values
/* 
let age = 20;
let price = 99.50;
let student = "Pedro";
let passed = true;

console.log(typeof age);
console.log(typeof student); */

// Display Output
/* 
let  number = 10;
console.log(number);
console.log("Testing...")
 */

// Operators
/* 
let a = 10;
let b = 3;
console.log(a + b);
console.log(a % b);
console.log(a > b); */

// equal operator == vs ===
/* 
console.log(5 == "5");
console.log(5 === "5");
 */

// conditional operators
/* 
let number = 10;

if (number > 0) {
  console.log("Positive");
}
else {
  console.log("Negative");
} */

// Ternary operator
// if statement using ternary operator
/* 
let age = 17; 
let student_status = age >= 18
  ? "Legal Age kana"
  : "Minor pa ka";
console.log(student_status); */

// switch statement
/* 
let day = 2;
switch (day) {
  
  case 1:
    console.log("Monday");
  break;

  case 2:
    console.log("Tuesday");
  break;
    
  default:
    console.log("Other day");
} */

// for loop    
/* 
for (let i = 0; i < 5; i++) {
  console.log(i);
} */

// while loop
/* 
let i = 0;
while (i < 3) {
  console.log("while " + i);
  i++;
}

let x = 0;

do {
  console.log("do while " + x );
  x++;
} while (x < 3);
 */

// function methods
/* 
function sum (a,b) {
  return a + b;
}
let result = sum(10,20);
console.log(result);

console.log(sum(10,20));
 */

// Objects: Grouping related information
/* 
let student = {
  name: "Juan",
  age: 20,
  
};

console.log(student.name);
 */

// Class 

class student {
  constructor(name) {
    this.name = name;
  } 
  display () {
    console.log(this.name);
  }
}

let stud1 = new student("Juan");
let stud2 = new student("Maria");

stud1.display();
stud2.display();
