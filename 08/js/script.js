window.onload = () => {
//   let headers = document.querySelector("header");

//    console.log(headers, "Headers");
// //   headers.innerHtml = "Helloy";
// //   headers[1].innerHTML = "hhhhh";
// //   headers[2].innerHTML = `<div>Helloooy</div>`;

//   let [...myBody] = document.querySelectorAll('body');
//   console.log(myBody);


  

// let newElem = document.createElement('p');
// newElem.innerHTML = 'PPPP';
// headers.appendChild(newElem);

// let footer = document.querySelector('footer');
// // let div = document.createElement('div');
// // div.id = 'js';
// // div.className = 'js-class';
// // div.innerText = ' Change div';
// // footer.appendChild(div);

// // let list = document.querySelector('.list');
// //   let li = document.createElement('li');
// //   li.innerText = 'first item';
// //   list.appendChild(li);

// //   function myList(numbRow) {
// //     for (let i = 0; i < numbRow; i++) { 
// //     let li = document.createElement('li');
// //     li.textContent = 'first item';
// //     list.appendChild(li);
// //   }
// //   }

// //   function myMenuList(name) {
// //     let li = document.createElement('li');
// //     li.innerText = name;
// //     list.appendChild(li);
// //   }

//   // myMenuList('text');
//   // myMenuList('htll');
//   // myMenuList('About');

//   let lastItem = list.lastElementChild;
//   console.log(lastItem);
//   list.removeChild(lastItem);
  let firstLink = document.querySelector('#first');
  let secondLink = document.querySelector('#second');
  let thirdLink = document.querySelector('#third');
  console.log(thirdLink);

  firstLink.setAttribute('href', 'www.google.com.ua');
  firstLink.textContent = 'My search';
  secondLink.removeAttribute('href');
  let tL = thirdLink.getAttribute('href');
  console.log(tL);



};
