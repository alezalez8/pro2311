//  ===== task 1 =====

let userWallet = {
  amountUsa: 120,
  amountEuro: 150,
  amountUa: 4500,
};

let currencyUSD = {
  buy: 39.8,
  sell: 40.25,
  name: "usd",
};
let currencyEURO = {
  buy: 41.7,
  sell: 42.3,
  name: "euro",
};
let currencyUA = {
  buy: 1,
  sell: 1,
  name: "ua",
};

let bank = [currencyUSD, currencyEURO, currencyUA];

// return array of possible amount in euro or usa from grivna
function foreignExchange(userAccount, bank) {
  let possibleBuyUsd = 0;
  let possibleBuyEuro = 0;
  if (userAccount.amountUa > 0) {
    bank.forEach((item) => {
      if (item.name == "usd") {
        possibleBuyUsd = userAccount.amountUa / item.buy;
      } else if (item.name == "euro") {
        possibleBuyEuro = userAccount.amountUa / item.buy;
      }
    });
  } else {
    alert("the amount of your account in UA is less then zero");
  }
  return [possibleBuyUsd.toFixed(3), possibleBuyEuro.toFixed(3)];
}

// return total saves in grivna
function amountInGrivna(userAccount, bank) {
  let amountOfUserMoney = 0;
  bank.forEach((item) => {
    if (item.name == "usd") {
      amountOfUserMoney += userAccount.amountUsa * item.sell;
    } else if (item.name == "euro") {
      amountOfUserMoney += userAccount.amountEuro / item.sell;
    }
  });

  return amountOfUserMoney.toFixed(3);
}

// ===== test functions ======
console.log(
  "Your saves in US or EU are: ",
  foreignExchange(userWallet, bank).toString()
);
console.log(
  `Your total summ in grivna (UA) is ${amountInGrivna(userWallet, bank)} grn`
);

console.log("=============================================================");

// ===== task 2 =====
function move(direction, amountStep) {
  let direct = "";
  switch (direction) {
    case "north":
      direct = "північ";
      break;
    case "west":
      direct = "захід";
      break;
    case "south":
      direct = "південь";
      break;
    case "east":
      direct = "схід";
      break;
    default:
      direct = "у невідомість :(";
  }
  return `Юзер перемістився на ${direct} на ${amountStep} кроків`;
}

function moveUser(direction, move, amountStep) {
  return move(direction, amountStep);
}

// ===== test =====
console.log(moveUser("north", move, 10));
console.log(moveUser("south", move, 20));
console.log(moveUser("???", move, 10));
console.log("=============================================================");

// ===== task 3 =====

let unmodifideArray = [
  "Keep",
  "Remove",
  "Keep",
  "Remove",
  "Keep",
  "Remove",
  "Keep",
  "Remove",
];

function removeEvenElements(array) {
  let myModifArray = [];
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      if (i % 2 == 0) {
        myModifArray.push(array[i]);
      }
    }
    return myModifArray;
  } else {
    console.log("This is not an array");
    return "";
  }
}
// ===== test =====
console.log("Old array are: ", unmodifideArray.toString());
console.log("New array are: ", removeEvenElements(unmodifideArray).toString());
console.log("=============================================================");

// ===== task 4 =====
let figurs = [
  {
    figure: "Squar",
    sizeA: 4,
    sizeB: 4,
  },
  {
    figure: "Rectangle",
    sizeA: 4,
    sizeB: 8,
  },
];

function calculateArea(figure) {
  figure.forEach((element) => {
    console.log(`${element.figure} is ${element.sizeA * element.sizeB}`);
  });
}
// ===== test =====
calculateArea(figurs);
console.log("=============================================================");

// ===== task 5 =====
let myArray = [2, 3, 5, 4, 8, 7, 9, 10];
let myModifArray = myArray.map((a) => {
  return a % 2 == 0 ? a * 4 : a;
});
// ===== test =====
console.log(myArray.toString());
console.log(myModifArray.toString());
console.log("=============================================================");


function ss(arr){
arr.forEach()
}