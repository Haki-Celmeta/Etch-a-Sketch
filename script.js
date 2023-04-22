let gridContainer = document.querySelector(".grid-container");
const rangeAdjustment = document.querySelector("#range-adjustment");
const rangeValue = document.querySelector(".range-value");
const eraser = document.querySelector(".eraser");
const color = document.querySelector(".color");
const pickColor = document.querySelector("#pick-color");
const clearAll = document.querySelector(".clear");
const colorful = document.querySelector(".colorful-rainbow");
let range = 0;
let allColor = [
  "red",
  "blue",
  "yellow",
  "green",
  "grey",
  "lightblue",
  "aqua",
  "beige",
  "blueviolet",
  "blurlywood",
  "crimson",
  "coral",
  "darkcyan",
  "firebrick",
  "cyan",
  "gold",
  "goldenrod",
];

function randomColor() {
  return allColor[Math.floor(Math.random() * allColor.length)];
}

colorful.addEventListener("click", function () {
  gridContainer.addEventListener("mouseover", function (event) {
    event.target.style.background = `${randomColor()}`;
  });
});

function addsGridItem(range) {
  gridContainer.innerHTML = "";
  for (let i = 0; i < range * range; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid-item");
    gridContainer.append(grid);
  }
}

color.addEventListener("click", function () {
  gridContainer.addEventListener("mouseover", function (event) {
    event.target.style.background = `${pickColor.value}`;
  });
});

eraser.addEventListener("click", function () {
  gridContainer.addEventListener("mouseover", function (event) {
    event.target.style.background = "transparent";
  });
});

clearAll.addEventListener("click", function () {
  const gridItems = document.querySelectorAll(".grid-item");
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.background = "transparent";
  }
});

rangeAdjustment.addEventListener("input", function (e) {
  range = e.target.value;
  rangeValue.innerText = `${e.target.value}x${e.target.value}`;
  gridContainer.style.gridTemplateColumns = `repeat(${range}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${range}, 1fr)`;
  addsGridItem(range);
});

gridContainer.addEventListener("mouseover", function (event) {
  event.target.style.background = `${pickColor.value}`;
});
