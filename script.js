var selectedColorOption = "";

function startSketchPad() {
    var startButton = document.getElementById("startButton");
    startButton.style.display = "none";
  
    var container = document.getElementById("container");
    container.innerHTML = "";
  
    var colorOptions = document.getElementById("colorOptions");
    colorOptions.style.display = "block";
  
    createGrid();
  }
  
function createGrid() {
  var squaresPerSide = 16;

  var container = document.getElementById("container");
  container.style.width = `${squaresPerSide * 60}px`;

  for (var i = 0; i < squaresPerSide * squaresPerSide; i++) {
    var square = document.createElement("div");
    square.className = "square";
    square.addEventListener("mouseover", changeColor);
    container.appendChild(square);
  }
}

function changeColor(event) {
  var square = event.target;

  if (selectedColorOption === "black") {
    square.style.backgroundColor = "black";
    darkenSquare(square);
  } else if (selectedColorOption === "rainbow") {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    darkenSquare(square);
  } else if (selectedColorOption === "eraser") {
    square.style.backgroundColor = "";
  }
}

function darkenSquare(square) {
  var darkness = square.dataset.darkness || 0;
  if (darkness < 10) {
    darkness++;
    square.dataset.darkness = darkness;
  }
  square.style.opacity = darkness / 10;
}

function setBlackColor() {
  selectedColorOption = "black";
}

function setRainbowColor() {
  selectedColorOption = "rainbow";
}

function setColorOption(colorOption) {
  if (colorOption === "black") {
    setBlackColor();
  } else if (colorOption === "rainbow") {
    setRainbowColor();
  } else {
    selectedColorOption = colorOption;
  }
}
