function getRandomColour() {
  let colour = [0,0,0];
  colour[0] = Math.floor(Math.random()*255);
  colour[1] = Math.floor(Math.random()*255);
  colour[2] = Math.floor(Math.random()*255);

  let rgb = "rgb(" + colour.join(',') + ")";
  return rgb;
}

function createGrid() {
  let divSize = Math.floor(grid_size/grid);
  for(let i=0; i<grid*grid; i++) {
    const sqDiv = document.createElement("div");
    sqDiv.style["width"] = divSize + "px";
    sqDiv.style["height"] = divSize + "px";
    sqDiv.style["background-color"] = "black";
    //sqDiv.style["border"] = "1px solid white";
    sqDiv.style["margin"] = "0px";
    sqDiv.style["flex"] = "0 0 auto";
    sqDiv.addEventListener("mouseenter", () => {
      sqDiv.style["background-color"] = String(getRandomColour());
    })
    container.appendChild(sqDiv);
  }
}

let grid = 16;
let grid_size = 800; 

const container = document.querySelector("#container");
container.style["display"] = "flex";
container.style["width"] = grid_size + "px";
container.style["height"] = grid_size + "px";
container.style["flex-wrap"] = "wrap";

document.addEventListener('DOMContentLoaded', createGrid());

const currentGridSize = document.querySelector("#currentGridSize");
currentGridSize.textContent = grid + " x " + grid + " squares";

const button = document.querySelector("#button");
const input = document.querySelector("#input");

button.addEventListener("click", () => {
  grid = input.value;
  input.value = '';
  while(container.firstChild){
    container.removeChild(container.firstChild);
  };
  currentGridSize.textContent = grid + " x " + grid + " squares"
  createGrid();
});




