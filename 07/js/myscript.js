class MyFirstClass {
  constructor(fName, age) {
    this.fName = fName;
    this.age = age;
  }

  info() {
    console.log(`My name is ${this.fName} and I'm ${this.age} year old`);
  }

  get fName() {
    return "${this.fName}";
  }
  set fName(value) {
    this._fName = value;
  }

  set age(value) {
    this._age = value;
  }

  static counter = 0;
}

let exm = new MyFirstClass("Alex", 49);
console.log(exm);
console.log(MyFirstClass.counter);

MyFirstClass.staticMethod = function(){console.log('static');}

MyFirstClass.prototype.publicMethod = function(){console.log('public');}

console.log(MyFirstClass.staticMethod());
console.log(exm.publicMethod());
