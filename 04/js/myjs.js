// // ===== task 1 =====

// let userWallet = {
//   amountUsa: 120,
//   amountEuro: 150,
//   amountUa: 4500,
// };

// let bank = {
//   buy: 0,
//   sell: 0,
// };

// let userOne = userWallet;
// let userTwo = userWallet;

// userOne.amountUa = 3300;

// console.log(userOne.amountUa);
// console.log(userTwo.amountUa);
// console.log(userWallet.amountUa);

// bank.buy = 10;

// let myBank = [];

// // ===== task 2 =====
// function move(amountStep, direction) {}
// function moveUser(direction, move, amount) {}
// ===== task 3 =====
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
  figure.forEach((nameOfFigure, a, b) => {
    console.log(`${nameOfFigure}, is , ${a * b}`);
  });
}
calculateArea(figurs);

// ===== task 5 =====
// let myArray = [2, 3, 5, 4, 8, 7, 9, 10];
// let myModifArray = myArray.map((a) => {
//   return a % 2 == 0 ? a * 4 : a;
// });
// console.log(myArray.toString());
// console.log(myModifArray.toString());
