window.onload = () => {
  // ===== task 1 =====
  let [...imgArray] = [
    "img/111.jpg",
    "img/222.jpg",
    "img/333.jpg",
    "img/444.jpg",
    "img/555.jpg",
    "img/666.jpg",
    "img/777.jpg",
    "img/888.jpg",
    "img/999.jpg",
  ];

  let countOfImage = 0;
  let sliderTime = document.querySelector(".slider-line-time");
  let img = document.createElement("img");

  let showImage = function () {
    if (countOfImage > imgArray.length - 1) {
      countOfImage = 0;
    } else if (countOfImage < 0) {
      countOfImage = imgArray.length - 1;
    }
    img.setAttribute("src", imgArray[countOfImage]);
    sliderTime.appendChild(img);
    countOfImage++;
  };

  let stopShow = function () {
    clearInterval(show);
  };

  let show = setInterval(showImage, 1000);

  // ===== end task 1 =====
  //======================================================================
  // ===== task 2 =====

  document.querySelector(".previous").addEventListener("click", function () {
    stopShow();
    countOfImage -= 2;
    showImage();
    console.log("previous ", countOfImage);
  });
  document.querySelector(".next").addEventListener("click", function () {
    stopShow();
    countOfImage++;
    showImage();
    console.log("next ", countOfImage);
  });
  // ===== end task 2 =====
  //======================================================================
  // ===== task 3 =====
  let timerValue = 60;

  let pItem = document.querySelector("p");
  let discMessage = "Наразі чекаемо знижку...";
  let myDiscount = function () {
    timerValue--;
    pItem.innerText = `${discMessage}  ${timerValue}`;
    if (timerValue < 0) {
      let newMessage = document.createElement("p");
      pItem.innerText = "Вітання! Ваша знижка 15% !";
      alert("Ви дочекались знижок");
      clearInterval(timerDiscount);
    }
  };
  let timerDiscount = setInterval(myDiscount, 1000);

  // ===== end task 3 =====
  //======================================================================
  // ===== task 4 =====
  let modalWindow = document.createElement("div");
  let modalButton = document.querySelector("#modalOpen");
  let body = document.querySelector("body");
  let lockPadding = document.querySelectorAll(".lock-padding");
  let unlock = true;

  querySelector("popup_open").addEventListener("click", function (e) {
    popupOpen();
    e.preventDefault();
  });
  querySelector("popup_close").addEventListener("click", function (e) {
    popupClose();
    e.preventDefault();
  });

  let popupOpen = function () {};
  let popupClose = function () {};

  // ===== end task 4 =====
  // https://www.youtube.com/watch?v=qoO1ZNi1LyI

  //=============================================
  // let offset = 0;
  // let absolOffset = 384;
  // const sliderline = document.querySelector(".slider-line");

  // // ===== end task 1 =====
  // // ===== task 2 =====

  // document.querySelector(".slider-next").addEventListener("click", function () {
  //   offset += absolOffset;
  //   if (offset > 2688) {
  //     offset = 0;
  //   }
  //   sliderline.style.left = -offset + "px";
  //   clearInterval(show);
  // });

  // document.querySelector(".slider-prev").addEventListener("click", function () {
  //   offset -= absolOffset;
  //   if (offset < 0) {
  //     offset = 2688;
  //   }
  //   sliderline.style.left = -offset + "px";
  // });
};
