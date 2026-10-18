class student {
  constructor(name,scores) {
    this.name = name;
    this.scores = scores;
  }

  getAverage(){
    let total = 0;
      for (let i = 0; i < this.scores.length; i++) {
        total += this.scores[i];
    }
    let average = total / this.scores.length;
    return average;
  }
  
  getLetterGrade() {
    if (this.getAverage() >= 90) {
      return "A";
    }
    else if (this.getAverage() >= 80) {
      return "B";
    }
    else if (this.getAverage() >= 70) {
      return "C";
    }
    else if (this.getAverage() >= 60) {
      return "D";
    }
    else {
      return "F";
    }
  }

  Display() {
    console.log(this.name + " - " + "Average: " + this.getAverage().toFixed(1) + " | "+ "Grade: "+ this.getLetterGrade())
  }
}

function analyzeStudents(students) {
  
  let totalSum = 0;
  let topStudent = students[0];

  for (let i = 0; i < students.length; i++) {
    totalSum += students[i].getAverage();
  
    if (students[i].getAverage() > topStudent.getAverage()) {
      topStudent = students[i];
    }
  }
  const classAverage = totalSum / students.length;
  
  console.log("-----------------------------------");
  console.log("Class Average: " + classAverage.toFixed(1));
  console.log("Top Student: " + topStudent.name + " with " + topStudent.getAverage().toFixed(1));
}

const stud1 = new student("Lany", [85, 90, 92]);
const stud2 = new student("Bongbung",  [70, 75, 68]);
const stud3 = new student("Dutherthe", [95, 98, 92]);
const stud4 = new student("Pico", [55, 60, 58]);

const students = [stud1, stud2, stud3, stud4];
console.log("------- STUDENT REPORT -------");
stud1.Display();
stud2.Display();
stud3.Display();
stud4.Display();
analyzeStudents(students);