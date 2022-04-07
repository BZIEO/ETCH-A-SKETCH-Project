//Variables
const container = document.querySelector(".container");
const reset = document.querySelector("#reset");

//Sets GRID
container.style.display = "grid";

//Once click, will invoke create restart function
reset.addEventListener("click", restart);

//Prompt to figure out size of grid
let askUser = function promptUser() {
  let response = prompt(
    "Number of squares per side for the new grid? (Max of 100): "
  );
  if (response > 1 && response <= 100) {
    return response;
  } else {
    alert("Please enter a number between 1-100");
    let response = prompt(
      "Number of squares per side for the new grid? (Max of 100): "
    );
    return response;
  }
};

//Will reset all gris/columns and invoke create(); function
function restart() {
  container.innerHTML = "";
  container.style.backgroundColor = "white";
  create();
}

//Function to prompt user for a number, then invokes function to make divs
function create() {
  let n = askUser();
  container.style.gridTemplateColumns = `repeat(${n},1fr)`;
  container.style.gridTemplateRows = `repeat(${n},1fr)`;
  divs(n ** 2);
}

//Function to make divs
function divs(n) {
  for (i = 1; i <= n; i++) {
    let divs = document.createElement("div");
    divs.className = "color";
    container.appendChild(divs);
  }
}

//Standard shown on page;
divs(256);

//Function to change background color to black
function blackOut(e) {
  if (e.target.classList.contains("color")) {
    e.target.style.backgroundColor = "black";
  }
}

//Function to change background color to white
function whiteOut(e) {
  if ((e.target.style.backgroundColor = "black")) {
    e.target.style.backgroundColor = "white";
  }
}
//When clicked on, div will change color
container.addEventListener("click", blackOut);

container.addEventListener("dblclick", whiteOut);
