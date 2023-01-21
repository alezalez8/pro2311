window.onload = () => {
  let container = document.querySelector(".container");
  container.classList.toggle("show");
  let width = container.offsetWidth;
  console.log(width);
  console.log(container.offsetHeight);
  let domRext = container.getBoundingClientRect();
  console.log(domRext);
  let widthC = container.clientWidth;
  console.log(widthC);
  let contStyle = getComputedStyle(container);
  //console.log(contStyle);
  let marginLeft = parseInt(contStyle.marginLeft);
  console.log(marginLeft);

  // let btn = document.querySelector("#alertBtn");

  // function displayAlert() {
  //   alert("Click button");
  // }
  // btn.addEventListener("click", displayAlert);

  // let btnRemove = document.querySelector("#remove");

 

  // btnRemove.addEventListener('click', ()=>{
  //   btn.removeEventListener('click', displayAlert);
  //   alert("Remove done");
  // });

let h1 = document.querySelector('h1');
h1.addEventListener('click', function(){
  console.log(this);
  this.textContent = 'Helloy';
})

let [...pArr] = document.querySelectorAll('.div p');
console.log(pArr);
for(let i = 0; i < pArr.length; i++){
  pArr[i].addEventListener('click', function(){
    this.style.background = 'red';
    this.textContent = `My index ${i}`;
  })
}


};
