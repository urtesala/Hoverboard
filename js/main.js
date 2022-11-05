"use strict";
console.log("main.js");

const container = document.getElementById("container");
const colors = [
  "#FF3131",
  "#FF5E00",
  "#FFF01F",
  "#FFF01F",
  "#E7EE4F",
  "#39FF14",
  "#7FFF00",
  "#CCFF00",
  "#1F51FF",
  "#0FF0FC",
  "#BC13FE",
  "#8A2BE2",
  "#FF1493",
  "#FF44CC",
  "#EA00FF",
];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = " 0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
