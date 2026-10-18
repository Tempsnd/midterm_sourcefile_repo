

let studentScores = [85,72,91,64,78];

console.log("");
console.log("Student Scores: ");
for (let i = 0; i < studentScores.length; i++) {
  console.log(studentScores[i]);

}

let totalScore = 0;
let highestScore = studentScores[0];
let lowestScore = studentScores[0];
let passedCount = 0;
let failedCount = 0;

console.log("");

for (let i = 0; i < studentScores.length; i++) {

  if (studentScores[i] >=90 ) {
    console.log("Student " + (i + 1) + ": " + studentScores[i] + " - Excellent - Passed");
    passedCount = passedCount + 1;
  }
  else if (studentScores[i] >=80 ) {
    console.log("Student " + (i + 1) + ": " + studentScores[i] + " - Very Good - Passed");
    passedCount = passedCount + 1;  
  }
  else if (studentScores[i] >=75 ) {
    console.log("Student " + (i + 1) + ": " + studentScores[i] + " - Good - Passed");
    passedCount = passedCount + 1;
  }
  else {
    console.log("Student " + (i + 1) + ": " + studentScores[i] + " - Failed");
    failedCount = failedCount + 1;
  }
}

console.log("");



for (let i = 0; i < studentScores.length; i++) {
  totalScore += studentScores[i];
  if (studentScores[i] > highestScore) {
    highestScore = studentScores[i];
  }
  if (studentScores[i] < lowestScore) {
    lowestScore = studentScores[i];
  }
}

let averageScore = totalScore / studentScores.length;

console.log("Total Score: " + totalScore);
console.log("Highest Score: " + highestScore);
console.log("Lowest Score: " + lowestScore);
console.log("Average Score: " + averageScore);
console.log("Passed: " + passedCount);
console.log("Failed: " + failedCount);