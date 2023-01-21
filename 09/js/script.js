window.onload = () => {
  let container = document.querySelector(".container");
  container.classList.toggle("show");
  let width = container.offsetWidth;
  console.log(width);
  console.log(container.offsetHeight);
  let domRext =  container.getBoundingClientRect();
  console.log(domRext);
  let widthC = container.clientWidth;
  console.log(widthC);
  let contStyle = getComputedStyle(container);
  console.log(contStyle);
  let marginLeft = parseInt(contStyle.marginLeft);
  console.log(marginLeft);

};

