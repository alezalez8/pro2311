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


