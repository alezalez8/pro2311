window.onload = () => {
  let div = document.querySelector(".input-form");
  let myInput = document.createElement("input");
  myInput.setAttribute("type", "button");
  myInput.setAttribute("value", "input your text");
  div.appendChild(myInput);

  let myDate = new Date();
  console.log(myDate.toTimeString());
  console.log(myDate.getDate()); // day
  console.log(myDate.getMonth()); // month
  console.log(myDate.getFullYear()); // year

  let inputTime = function () {
    let myDate = new Date();
    return (
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

  console.log(inputTime());
  // let createInput = function(){
  //   let ul = document.createElement('ul');
  //   for(let i = 0; i < 5; i++){
  //     let myData = prompt('Enter your data');
  //     let myDate = new Date();

  //     let li = document.createElement('li');
  //     li.innerHTML = myData + myDate;
  //     ul.appendChild(li);
  //   }
  //   div.appendChild(ul);
  // }

  // createInput();

  //   //   let headers = document.querySelector("header");

  //   //    console.log(headers, "Headers");
  //   // //   headers.innerHtml = "Helloy";
  //   // //   headers[1].innerHTML = "hhhhh";
  //   // //   headers[2].innerHTML = `<div>Helloooy</div>`;

  //   //   let [...myBody] = document.querySelectorAll('body');
  //   //   console.log(myBody);

  //   // let newElem = document.createElement('p');
  //   // newElem.innerHTML = 'PPPP';
  //   // headers.appendChild(newElem);

  //   let footer = document.querySelector("footer");
  //   // // let div = document.createElement('div');
  //   // // div.id = 'js';
  //   // // div.className = 'js-class';
  //   // // div.innerText = ' Change div';
  //   // // footer.appendChild(div);

  //   // // let list = document.querySelector('.list');
  //   // //   let li = document.createElement('li');
  //   // //   li.innerText = 'first item';
  //   // //   list.appendChild(li);

  //   // //   function myList(numbRow) {
  //   // //     for (let i = 0; i < numbRow; i++) {
  //   // //     let li = document.createElement('li');
  //   // //     li.textContent = 'first item';
  //   // //     list.appendChild(li);
  //   // //   }
  //   // //   }

  //   // //   function myMenuList(name) {
  //   // //     let li = document.createElement('li');
  //   // //     li.innerText = name;
  //   // //     list.appendChild(li);
  //   // //   }

  //   //   // myMenuList('text');
  //   //   // myMenuList('htll');
  //   //   // myMenuList('About');

  //   //   let lastItem = list.lastElementChild;
  //   //   console.log(lastItem);
  //   //   list.removeChild(lastItem);
  //   let firstLink = document.querySelector("#first");
  //   let secondLink = document.querySelector("#second");
  //   let thirdLink = document.querySelector("#third");
  //   console.log(thirdLink);

  //   firstLink.setAttribute("href", "www.google.com.ua");
  //   firstLink.textContent = "My search";
  //   secondLink.removeAttribute("href");
  //   let tL = thirdLink.getAttribute("href");
  //   console.log(tL);

  //   let menuItems = ["Home  ", "News  ", "Posts"];
  //   let nav = document.querySelector("nav");
  //   let fragment = new DocumentFragment();
  //   menuItems.forEach((item) => {
  //     let link = document.createElement("a");
  //     link.setAttribute("href", item);
  //     link.innerText = item;

  //     fragment.appendChild(link);
  //   });
  //   nav.appendChild(fragment);

  //   let sideMenu = document.querySelector(".sideMenu");
  //   let links = nav.children;
  //   console.log("Links  ", links);
  //   let cloneData = links[0].cloneNode(true);
  //   sideMenu.appendChild(cloneData);

  //   // let menuItems1 = ["Item 1  ", "Item 2  ", "Item 3  "];
  //   // let fragment1 = new DocumentFragment();
  //   // menuItems1.forEach((item) => {
  //   //   let link = document.createElement("p");
  //   //   link.innerText = item;
  //   //   fragment1.appendChild(link);
  //   // });

  //   // let mydiv1 = document.querySelector('.divv');
  //   // mydiv1.appendChild(fragment1);

  //   let deepP = document.querySelector("#my-p");
  //   let cloneP = deepP.cloneNode(true);
  //   footer.appendChild(cloneP);

  //   let title = document.querySelector("h1");
  //   let textP = document.createElement("p");
  //   textP.innerText = "Hello in P";
  //   title.before(textP);

  //   // for (let i = 0; i < 10; i++) {
  //   //  sleep(1000);
  //   //   if (i % 2 == 0) {
  //   //     title.setAttribute("style", "color:red");
  //   //   } else {
  //   //     title.setAttribute("style", "color:yellow");
  //   //   }
  //   // }

  //   title.setAttribute("style", "color:red");
  //   sleep(1000);
  //   title.setAttribute("style", "color:yellow");

  //   function sleep(millis) {
  //     var t = (new Date()).getTime();
  //     var i = 0;
  //     while (((new Date()).getTime() - t) < millis) {
  //         i++;
  //     }
  // }
  // function sleep1(ms) {
  //   ms += new Date().getTime();
  //   while (new Date() < ms){}
  //   }

  //   let h2 = document.querySelector("h2");
  //   //h2.setAttribute('style', 'color:red');
  //   h2.style.color = "red";
  //   h2.style.cssText += "padding:40px";
  //   h2.style.textAlign = "center";
  //   h2.style.fontSize = "50px";
  //   h2.style.border = "5px";

  //   let compStyle = getComputedStyle(h2);
  //   console.log("classname  ", h2.className);
};
