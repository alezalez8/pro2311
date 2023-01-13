window.onload = () => {
  let headers = document.querySelector("header");

   console.log(headers, "Headers");
//   headers.innerHtml = "Helloy";
//   headers[1].innerHTML = "hhhhh";
//   headers[2].innerHTML = `<div>Helloooy</div>`;

  let [...myBody] = document.querySelectorAll('body');
  console.log(myBody);


  

let newElem = document.createElement('p');
newElem.innerHTML = 'PPPP';
headers.appendChild(newElem);

let footer = document.querySelector('footer');
let div = document.createElement('div');
div.id = 'js';
div.className = 'js-class';
div.innerText = ' Change div';
footer.appendChild(div);

let list = document.querySelector('.list');
let li = 





};
