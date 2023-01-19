window.onload = () => {
  // ===== task 1 =====
  let createInput = function () {
    let container = document.querySelector(".container");
    let ul = document.createElement("ul");
    let count = 0;
    while (true) {
      let inputData = prompt("Enter your data or press enter for finish");
      if (inputData === "") {
        return;
      }
      count++;
      if (count > 5) {
        ul.removeChild(ul.firstElementChild);
      }

      let li = document.createElement("li");
      li.innerHTML = `${inputData}  ${formatTime()}`;
      ul.appendChild(li);
      container.appendChild(ul);
    }
  };

  let formatTime = function () {
    // output format, example:  19.1.2023 18:40
    let myDate = new Date();
    return (
      "  " +
      myDate.getDate() +
      "." +
      (myDate.getMonth() + 1) +
      "." +
      myDate.getFullYear() +
      "  " +
      myDate.getHours() +
      ":" +
      myDate.getMinutes()
    );
  };

  //createInput(); // for run need to uncomment !!!!!!!
  // ===== end task 1 =====
  //----------------------------------------------------------------------
  // ===== task 2 =====

  class CustomImage {
    constructor(imgPath, alt, href) {
      this.imgPath = imgPath;
      this.alt = alt;
      this.href = href;
    }
  }

  let arrayOfImages = [
    new CustomImage(
      "img/women.png",
      "WOMEN",
      "https://pixabay.com/ru/photos/%d0%b6%d0%b5%d0%bd%d1%89%d0%b8%d0%bd%d0%b0-%d1%81%d0%b8%d0%bb%d1%83%d1%8d%d1%82-%d0%b7%d0%b0%d1%85%d0%be%d0%b4-%d1%81%d0%be%d0%bb%d0%bd%d1%86%d0%b0-%d0%bf%d0%bb%d1%8f%d0%b6-570883/"
    ),
    new CustomImage(
      "img/sunset.png",
      "SUNSET",
      "https://pixabay.com/ru/photos/%d0%bc%d0%be%d1%80%d0%b5-%d0%b7%d0%b0%d1%85%d0%be%d0%b4-%d1%81%d0%be%d0%bb%d0%bd%d1%86%d0%b0-%d0%bb%d0%be%d0%b4%d0%ba%d0%b0-%d1%81%d1%83%d0%bc%d0%b5%d1%80%d0%ba%d0%b8-164989/"
    ),
    new CustomImage(
      "img/ship.png",
      "SHIP",
      "https://pixabay.com/ru/photos/%d0%b7%d0%b0%d1%85%d0%be%d0%b4-%d1%81%d0%be%d0%bb%d0%bd%d1%86%d0%b0-%d1%81%d1%83%d0%b4%d0%bd%d0%be-%d0%bf%d0%b0%d1%80%d1%83%d1%81%d0%b0-%d0%bb%d0%be%d0%b4%d0%ba%d0%b0-675847/"
    ),
    new CustomImage(
      "img/flowers.png",
      "FLOWERS",
      "https://pixabay.com/ru/photos/%d0%bc%d0%b0%d0%ba%d0%b8-%d0%bf%d0%be%d0%bb%d0%b5-%d0%b7%d0%b0%d1%85%d0%be%d0%b4-%d1%81%d0%be%d0%bb%d0%bd%d1%86%d0%b0-%d1%81%d1%83%d0%bc%d0%b5%d1%80%d0%ba%d0%b8-174276/"
    ),
  ];

  let outputImages = function (arrayOfImages) {
    let picture = document.querySelector(".picture");
    let fragmentOfImages = new DocumentFragment();
    arrayOfImages.forEach((images) => {
      let impLink = document.createElement("a");
      impLink.setAttribute("href", images.href);
      let img = document.createElement("img");
      img.src = images.imgPath;
      img.alt = images.alt;
      img.width = 200;
      impLink.appendChild(img);
      fragmentOfImages.appendChild(impLink);
    });
    picture.appendChild(fragmentOfImages);
  };

  outputImages(arrayOfImages);

  // ===== end task 2 =====
  //----------------------------------------------------------------------
  // ===== task 3 =====
  let students = document.querySelector(".students");
  // ===== end task 3 =====
};
