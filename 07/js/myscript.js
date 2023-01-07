// ===== task 1 =====

let myHeader = document.querySelector("header");
let myNav = document.querySelector("nav");
let [...myUlLi] = document.querySelectorAll("ul li");
let myfooter = document.querySelector("footer");

myHeader.innerHTML = "Change header";
myNav.innerHTML = "Change nav";

myUlLi.forEach((element) => {
  element.innerHTML = "Change list li";
});

myfooter.innerHTML = "Change footer";

// ===== task 2 =====

let myLi = document.querySelector("li");
console.log(myLi.parentElement);

// ===== task 3 - 5 =====

class UserMovie {
  constructor(year, genre, title, showAmount) {
    this.year = year;
    this.genre = genre;
    this.title = title;
    this.showAmount = showAmount;
  }
  rateMovie = function () {
    return this.showAmount / (new Date().getFullYear() - this.year);
  };

  get year() {
    return this._year;
  }
  set year(value) {
    this._year = value;
  }
}

let filmLibrary = [
  new UserMovie(1972, "horor", "AAA", 1348),
  new UserMovie(2020, "detectiv", "CCC", 411),
  new UserMovie(1992, "comedy", "BBB", 217),
  new UserMovie(2001, "fantasy", "DDD", 107),
  new UserMovie(1995, "family", "EEE", 2),
];

let [movieOne, movieTwo, movieThree, movieFour, movieFive] = filmLibrary;

console.log(`Movie ${movieThree.title} has rate ${movieThree.rateMovie()}`);
console.log(`Movie ${movieTwo.title} has rate ${movieTwo.rateMovie()}`);

filmLibrary.sort((a, b) => {
  return a.year - b.year;
});

console.log("Library sort by year ", filmLibrary);

filmLibrary.sort((a, b) => {
  return a.rateMovie() - b.rateMovie();
});

console.log("Library sort by rate ", filmLibrary);
