// javascript.js

const DEFAULT_GRID_SIZE = 64;


resetGrid(DEFAULT_GRID_SIZE);
addGridEventListeners();


const gridSizeButton = document.querySelector(".grid-size-button");

gridSizeButton.addEventListener("click", () => {
    let size = Number(prompt("Set side size for grid [1,100]:", DEFAULT_GRID_SIZE));
    while (isNaN(size) || size <= 0 || size > 100) {
        alert("Invalid number");
        size = prompt("Side size for grid:", DEFAULT_GRID_SIZE);
    }
    
    resetGrid(size);
    addGridEventListeners();
})

function addGridEventListeners() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            const currOpacity = Number(
                window
                .getComputedStyle(square)
                .getPropertyValue("opacity")
            );
            square.style.opacity = (currOpacity >= 1) ? 1 : currOpacity + 0.1;
        });
    });
}

function resetGrid(size) {
    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    for (let row = 0; row < size; row++) {
        const rowContainer = document.createElement("div");
        rowContainer.style.display = "flex";
        rowContainer.style.flex = 1;
        rowContainer.style.backgroundColor = "grey";
        rowContainer.style.alignItems = "stretch";
        for (let col = 0; col < size; col++) {
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            squareDiv.style.flex = "1";
            rowContainer.appendChild(squareDiv);
        }
        container.appendChild(rowContainer);
    }
}