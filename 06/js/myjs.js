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

// ===== task 1 =====



//---------------------------------------
// function MyCars(model, year){
//    this.model = model;
//    this.year = year;
// }

// MyCars.info = function(){
//    console.log('Simply info');
// }

// MyCars.prototype.infoP = function(){
//    console.log('Info prototape');
// }

// let ford = new MyCars('Taunus', 1980);
// let toyta = new MyCars('RAV4', 1995);

// let myGarage = [ford, toyta];
// console.log(myGarage);
//------------------------------------
