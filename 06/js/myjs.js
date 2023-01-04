// ===== task 1 =====

function uknownArgements(...myArgs) {
if (myArgs.length > 1) {
    let summ = 0;
    for (let i = 0; i < myArgs.length; i++) {
      summ += myArgs[i];
    }
  } else {
    console.log("You enter only one parametr");
    return myArgs;
  }
}

let myParam = prompt("Enter numbers");

let summArgs = uknownArgements(myParam);
console.log(summArgs);

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
