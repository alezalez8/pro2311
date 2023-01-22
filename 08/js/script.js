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

  createInput();
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
  let createStudentTable = function () {
    table = document.createElement("table");
    table.setAttribute("border", 1);
    table.setAttribute("align", "left");
    table.setAttribute("width", "50%");
    table.setAttribute("height", "30");

    let tableHead = document.createElement("tr");
    let nameStudent = document.createElement("th");
    nameStudent.innerText = "Name of student";
    let city = document.createElement("th");
    city.innerText = "City";
    let course = document.createElement("th");
    course.innerText = "Current course";
    tableHead.appendChild(nameStudent);
    tableHead.appendChild(city);
    tableHead.appendChild(course);
    table.appendChild(tableHead);
    students.appendChild(table);

    // ======== add students ============
    let nameStudentOne = document.createElement("td");
    nameStudentOne.innerText = "Shunin Aleksandr";
    let cityOne = document.createElement("td");
    cityOne.innerText = "Odessa";
    let courseOne = document.createElement("td");
    courseOne.innerText = "1";
    let rowTableOne = document.createElement("tr");
    rowTableOne.appendChild(nameStudentOne);
    rowTableOne.appendChild(cityOne);
    rowTableOne.appendChild(courseOne);
    table.appendChild(rowTableOne);

    let nameStudentTwo = document.createElement("td");
    nameStudentTwo.innerText = "Ivanov Oleg";
    let cityTwo = document.createElement("td");
    cityTwo.innerText = "Kiev";
    let courseTwo = document.createElement("td");
    courseTwo.innerText = "2";
    let rowTableTwo = document.createElement("tr");
    rowTableTwo.appendChild(nameStudentTwo);
    rowTableTwo.appendChild(cityTwo);
    rowTableTwo.appendChild(courseTwo);
    table.appendChild(rowTableTwo);
  };

  createStudentTable();

  // ===== end task 3 =====
};
