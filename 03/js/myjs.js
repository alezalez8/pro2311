// task one
let arrRandomNumbers = [1, 3, 5, 4, 6, 9, 8, 20, 31, 33, 10];

function evenArray(array = []) {
  let myArray = [];
  if (true) {
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

function myShoppingList() {
  let myArray = [];
  for (let i = 0; i < 5; i++) {
    myArray.push(prompt(`Enter item #  ${i + 1}`));
  }
  return myArray;
}

myList = myShoppingList();
console.log(myList.toString());

// task three

