// task one
let arrRandomNumbers = [1, 3, 5, 4, 6, 9, 8, 20, 31, 33, 10];

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

// task two

// function myShoppingList() {
//   let myArray = [];
//   for (let i = 0; i < 5; i++) {
//     myArray.push(prompt(`Enter item #  ${i + 1}`));
//   }
//   return myArray;
// }

// myList = myShoppingList();
// console.log(myList.toString());

// task three

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

// task four
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

// task five
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

// task six
