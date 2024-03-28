const circleEl = document.querySelector(".circle");
const sbtEl = document.querySelector(".sbt");

const imgSlider = (fileName) => {
  document.querySelector(".starbucks").src = fileName;
  if (fileName === "img/img2.png") {
    circleEl.style.backgroundColor = "#d89b9e";
    sbtEl.style.color = "#d89b9e";
  } else if (fileName === "img/img3.png") {
    circleEl.style.backgroundColor = "#f3bee5";
    sbtEl.style.color = "#f3bee5";
  } else {
    circleEl.style.backgroundColor = "#017143";
    sbtEl.style.color = "#017143";
  }
};
