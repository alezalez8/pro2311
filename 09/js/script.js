window.onload = () => {
  let container = document.querySelector(".container");
  // container.classList.toggle("show");
  // let width = container.offsetWidth;
  // console.log(width);
  // console.log(container.offsetHeight);
  // let domRext = container.getBoundingClientRect();
  // console.log(domRext);
  // let widthC = container.clientWidth;
  // console.log(widthC);
  // let contStyle = getComputedStyle(container);
  // //console.log(contStyle);
  // let marginLeft = parseInt(contStyle.marginLeft);
  // console.log(marginLeft);

  // // let btn = document.querySelector("#alertBtn");

  // // function displayAlert() {
  // //   alert("Click button");
  // // }
  // // btn.addEventListener("click", displayAlert);

  // // let btnRemove = document.querySelector("#remove");

  // // btnRemove.addEventListener('click', ()=>{
  // //   btn.removeEventListener('click', displayAlert);
  // //   alert("Remove done");
  // // });

  // let h1 = document.querySelector("h1");
  // h1.addEventListener("click", function () {
  //   console.log(this);
  //   this.textContent = "Helloy";
  // });

  // let [...pArr] = document.querySelectorAll(".div p");
  // console.log(pArr);
  // for (let i = 0; i < pArr.length; i++) {
  //   pArr[i].addEventListener("click", function () {
  //     this.style.background = "red";
  //     this.textContent = `My index ${i}`;
  //   });
  // }
  // let tTest = document.querySelector("h2");
  // tTest.addEventListener("click", function (event) {
  //   console.log(event);
  // });

  // let myLink = document.querySelector('.mylink');
  // console.log(myLink);
  // myLink.addEventListener('click', function(e){
  //   console.log("Press");
  //   e.preventDefault();
  // })
  // document.querySelector('#alertBtn').onclick = ()=>{
  //   console.log("Alert press");
  // }
  // let input = document.querySelector('input');
  // let getData = document.querySelector("#get");

  // getData.onclick = function(){
  //   let inputData = input.value;
  //   console.log(inputData);
  // }

  let isTunnel = false;
  let e1 = document.querySelector("#first");
  let e2 = document.querySelector("#second");
  let e3 = document.querySelector("#third");

  e1.addEventListener(
    "click",
    function () {
      this.style.backgroundColor = "yellow";
      alert("Div 1 event work");
    },
    isTunnel
  );
  e2.addEventListener(
    "click",
    function () {
      this.style.backgroundColor = "green";
      alert("Div 2 event work");
    },
    isTunnel
  );
  e3.addEventListener(
    "click",
    function () {
      this.style.backgroundColor = "orange";
      alert("Div 3 event work");
    },
    isTunnel
  );
   

};
