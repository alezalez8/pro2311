// ===== task 1 =====

function uknownArguments(...myArgs) {
  let totalSumm = 0;
  if (myArgs.length > 2) {
    for (let numb of myArgs) {
      if (typeof numb == "number" && !isNaN(numb)) {
        totalSumm += numb;
      }
    }
    return totalSumm;
  } else {
    console.log("There are less then two or more arguments");
    return myArgs;
  }
}

// ===== test 1 =====
console.log(uknownArguments(1, 4, 5));
console.log(uknownArguments(1, "as", 7, "qwert", 12));
console.log(uknownArguments(1));

console.log("=============================================================");

// ===== task 2 - 3 =====

function happyBirthday(dateBirthday, monthBirthday) {
  if (
    dateBirthday + 1 == new Date().getDate() &&
    monthBirthday - 1 == new Date().getMonth()
  ) {
    console.log("Happy birthday!!!");
  }
}

function getAge(dateBirthday, monthBirthday, yearBirthday, happyBirthday) {
  let presentDate = new Date();
  let userDate = new Date(yearBirthday, monthBirthday - 1, dateBirthday + 1);
  console.log("Now is:    ", presentDate.toISOString().slice(0, 10));
  console.log("You enter: ", userDate.toISOString().slice(0, 10));
  let correction = 0;

  if (
    presentDate.getMonth() == userDate.getMonth() &&
    presentDate.getDate() >= dateBirthday
  ) {
    correction = 1;
  }
  let userAge =
    presentDate.getFullYear() -
    userDate.getFullYear() -
    (presentDate.getMonth() > userDate.getMonth() ? 0 : 1) +
    correction;

  console.log("Your age is ", userAge);
  happyBirthday(dateBirthday, monthBirthday);
}

// ===== test 2-3 =====
getAge(05, 01, 1984, happyBirthday);
getAge(06, 01, 1995, happyBirthday);

console.log("=============================================================");

// ===== task 4 =====

function getCentury(userYear) {
  let year = parseInt(userYear);
  return Math.ceil(year / 100);
}
// ===== test 4 =====
console.log(getCentury(1810));
console.log(getCentury(1700));
console.log(getCentury(1601));
console.log(getCentury(2000));
console.log(getCentury(1285));

console.log("=============================================================");

// ===== task 5 =====
function getAmountDays() {
  let presentDate = new Date();
  console.log("Now is ", presentDate.toDateString());
  let arrayDays = [];

  let currentMonth = new Date(
    presentDate.getFullYear(),
    presentDate.getMonth(),
    0
  ).getDate();
  presentDate.setMonth(presentDate.getMonth() + 2);
  let nextMonth = new Date(
    presentDate.getFullYear(),
    presentDate.getMonth(),
    0
  ).getDate();
  return (arrayDays = [currentMonth, nextMonth]);
}

// ===== test 5 =====
console.log(getAmountDays());
