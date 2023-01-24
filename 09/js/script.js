window.onload = () => {
  // ===== task 1 =====
  let offset = 0;
  let absolOffset = 384;
  const sliderline = document.querySelector(".slider-line");
  document.querySelector(".slider-next").addEventListener("click", function () {
    offset += absolOffset;
    if (offset > 2688) {
      offset = 0;
    }
    sliderline.style.left = -offset + "px";
  });

  document.querySelector(".slider-prev").addEventListener("click", function () {
    offset -= absolOffset;
    if (offset < 0) {
      offset = 2688;
    }
    sliderline.style.left = -offset + "px";
  });
};
