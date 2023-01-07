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
    return showAmount / (new Date().getFullYear - this.year);
  };
}

let filmLibrary = [
  new UserMovie(1972, "horor", "QQQ", 45),
  new UserMovie(1992, "horor", "QQQ", 45),
  new UserMovie(2020, "horor", "QQQ", 45),
  new UserMovie(2001, "horor", "QQQ", 45),
  new UserMovie(1995, "horor", "QQQ", 45),
];
