let arrRandomNumbers = [1, 3, 5, 4, 6, 9, 8, 20, 31, 33, 10];

// ======= task one =======
console.log("======= task one =======");

function evenArray(array) {
  let myArray = [];
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      if (!(array[i] & 1)) {
        myArray.push(array[i]);
      }
    }
  } else {
    alert("This is not an array");
  }
  return myArray;
}

let evenNumberArray = evenArray(arrRandomNumbers);
console.log("My array with even numbers is: ", evenNumberArray.toString());

// ======= task two =======
console.log("======= task two =======");

function myShoppingList() {
  let myArray = [];
  for (let i = 0; i < 5; i++) {
    myArray.push(prompt(`Enter item #  ${i + 1}`));
  }
  return myArray;
}

myList = myShoppingList();

console.log(myList.toString());

// ======= task three =======
console.log("======= task three =======");

function averageNumber(myArr) {
  let aver = 0;
  if (Array.isArray(myArr) && myArr.length >= 1) {
    for (let i = 0; i < myArr.length; i++) {
      aver += myArr[i];
    }
  } else {
    alert("This is not an array");
  }
  return aver / myArr.length;
}

let myTest = averageNumber(arrRandomNumbers);
console.log(myTest);

// ======= task four =======
console.log("======= task four =======");

let smile = [":)", "=)", ":)", "=)", ":)", "=)"];

function changeSymbol(myArr) {
  if (Array.isArray(myArr) && myArr.length >= 1) {
    for (let i = 0; i < myArr.length; i++) {
      if (myArr[i] == "=)") {
        myArr[i] = ";)";
      }
    }
  } else {
    alert("This is not an array");
  }
  return myArr;
}

console.log(changeSymbol(smile).toString());

// ======= task five =======
console.log("======= task five =======");

let animals = ["cat", "cow", "fish", "chicken", "dog", "pig"];

function addDeleteElement(myWord, myArr) {
  let myArray = [];
  if (myWord != null && Array.isArray(myArr)) {
    if (myWord == "last") {
      myArray.push(myArr.pop());
    } else if (myWord == "first") {
      myArray.push(myArr.shift());
    }
  } else {
    alert("This is not an array or correct word");
  }
  return myArray;
}

//test
console.log(addDeleteElement("last", animals));
console.log(animals.toString());

console.log(addDeleteElement("first", animals));
console.log(animals.toString());

// ======= task six =======
console.log("======= task six =======");

function summNumber(myArr) {
  let aver = 0;
  if (Array.isArray(myArr) && myArr.length >= 1) {
    for (let i = 0; i < myArr.length; i++) {
      aver += myArr[i];
    }
  } else {
    alert("This is not an array");
  }
  return aver;
}

let mySumm = summNumber(arrRandomNumbers);
console.log(mySumm);

// ======= task seven =======
console.log("======= task seven =======");

function myCustomArray(startNumber, finishNumber, myArr) {
  let myArray = [];
  if (
    startNumber < finishNumber &&
    Array.isArray(myArr) &&
    finishNumber < myArr.length
  ) {
    myArray = myArr.slice(startNumber, finishNumber + 1);
  } else {
    alert("This is not an array or correct start and finish");
  }
  return myArray;
}

console.log(arrRandomNumbers.toString());
console.log(myCustomArray(2, 5, arrRandomNumbers).toString());
