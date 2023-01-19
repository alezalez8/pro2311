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
      li.innerHTML = inputData + formatTime();
      ul.appendChild(li);
      container.appendChild(ul);
    }
  };

  let formatTime = function () {
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
};
