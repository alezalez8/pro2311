window.onload = () => {
  // ===== task 1 =====
  let createInput = function () {
    let container = document.querySelector(".container");
    let ul = document.createElement("ul");
    let count = 0;
    while (true) {
      let myData = prompt("Enter your data or press enter for finish");
      if (myData === "") {
        return;
      }
      count++;
      if (count > 5) {
        ul.removeChild(ul.firstElementChild);
      }

      let li = document.createElement("li");
      li.innerHTML = myData + inputTime();
      ul.appendChild(li);
      container.appendChild(ul);
    }
  };

  createInput();
  // ===== end task 1 =====

  // ===== task 2 =====
  
};
