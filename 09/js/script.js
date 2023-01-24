window.onload = () => {
  // ===== task 1 =====
  let offset = 0;
  const sliderline = document.querySelector(".slider-line");
  document.querySelector(".slider-next").addEventListener("click", function () {
    offset += 300;
    if (offset > 1832) {
      offset = 0;
    }
    sliderline.style.left = -offset + "px";
  });
};
