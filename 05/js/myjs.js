// ===== task 1 =====
function UserConstuctor(firstName, secondName, age) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.age = age;
  UserConstuctor.studentId++;
  this.studentId = UserConstuctor.studentId;
  if (UserConstuctor.studentId > 10) {
    console.log("Group of students are fully comleted");
  }
  this.info = function () {
    console.log(
      `Student # ${this.studentId}: ${this.firstName}  ${this.secondName}, age is ${this.age}`
    );
  };
}

UserConstuctor.studentId = 0;

const student1 = new UserConstuctor("Aleks", "Godzilla", 20);
const student2 = new UserConstuctor("Igor", "Tortlee", 21);
const student3 = new UserConstuctor("Petro", "Baranov", 19);
const student4 = new UserConstuctor("Olga", "Starceva", 22);
console.log(student1.info());
console.log(student2.info());
console.log(student3.info());
console.log(student4.info());

// ===== task 2 =====

UserConstuctor.prototype.changeFirstName = function () {
  return (this.firstName = prompt(
    `Input new first name of student with ID #${this.studentId}`
  ));
};
UserConstuctor.prototype.changeSecondName = function () {
  return (this.firstName = prompt(
    `Input new second name of student with ID #${this.studentId}`
  ));
};

UserConstuctor.prototype.changeAge = function () {
  return (this.firstName = prompt(
    `Input new age of student with ID #${this.studentId}`
  ));
};

student1.changeFirstName();
student2.changeAge();
student3.changeSecondName();
console.log("=============  Change some data of students ====================");
console.log(student1.info());
console.log(student2.info());
console.log(student3.info());
console.log(student4.info());

// ===== task 3 =====
function FigureCalculator(heigth, width) {
  this.heigth = heigth;
  this.width = width;
}

FigureCalculator.prototype.Area = function () {
  return `Area is ${this.heigth * this.width}`;
};
FigureCalculator.prototype.Perimetr = function () {
  return `Perimeter is ${2 * this.heigth + 2 * this.width}`;
};
FigureCalculator.prototype.Diagonal = function () {
  return `Diagonal is ${Math.sqrt(
    Math.pow(this.heigth, 2) + Math.pow(this.width, 2)
  )}`;
};

// ===== test =====
const myFigure = new FigureCalculator(3, 4);
console.log(myFigure.Area());
console.log(myFigure.Perimetr());
console.log(myFigure.Diagonal());

// ===== task 4 =====

let myWord = prompt("Input name");
let myArray = myWord.split("");
let myModifWord = "";
for (let i = 0; i < myArray.length; i++) {
  if (i == 0 || i == myArray.length - 1) {
    myModifWord += myArray[i].toUpperCase();
  } else {
    myModifWord += myArray[i];
  }
}
console.log(myModifWord);

// ===== task 5 =====
let myStringModifier = function () {
  let myWord = prompt("Input any word");
  let myModifWord = myWord.trim();
  let myLength = 10;
  if (myModifWord.length > myLength) {
    myModifWord = myModifWord.substring(0, myLength) + "...";
  }
  return myModifWord;
};
// ===== test =====
console.log(myStringModifier());
