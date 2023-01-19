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

  // ===== task 2 =====

  class CustomImage {
    constructor(impPath, alt, href) {
      this.imgPath = imgPath;
      this.alt = alt;
      this.href = href;
    }
    
  }

};


// women
// https://pixabay.com/ru/photos/%d0%b6%d0%b5%d0%bd%d1%89%d0%b8%d0%bd%d0%b0-%d1%81%d0%b8%d0%bb%d1%83%d1%8d%d1%82-%d0%b7%d0%b0%d1%85%d0%be%d0%b4-%d1%81%d0%be%d0%bb%d0%bd%d1%86%d0%b0-%d0%bf%d0%bb%d1%8f%d0%b6-570883/

// sunset
// https://pixabay.com/ru/photos/%d0%bc%d0%be%d1%80%d0%b5-%d0%b7%d0%b0%d1%85%d0%be%d0%b4-%d1%81%d0%be%d0%bb%d0%bd%d1%86%d0%b0-%d0%bb%d0%be%d0%b4%d0%ba%d0%b0-%d1%81%d1%83%d0%bc%d0%b5%d1%80%d0%ba%d0%b8-164989/

// ship
// https://pixabay.com/ru/photos/%d0%b7%d0%b0%d1%85%d0%be%d0%b4-%d1%81%d0%be%d0%bb%d0%bd%d1%86%d0%b0-%d1%81%d1%83%d0%b4%d0%bd%d0%be-%d0%bf%d0%b0%d1%80%d1%83%d1%81%d0%b0-%d0%bb%d0%be%d0%b4%d0%ba%d0%b0-675847/

// flowers
//https://pixabay.com/ru/photos/%d0%bc%d0%b0%d0%ba%d0%b8-%d0%bf%d0%be%d0%bb%d0%b5-%d0%b7%d0%b0%d1%85%d0%be%d0%b4-%d1%81%d0%be%d0%bb%d0%bd%d1%86%d0%b0-%d1%81%d1%83%d0%bc%d0%b5%d1%80%d0%ba%d0%b8-174276/