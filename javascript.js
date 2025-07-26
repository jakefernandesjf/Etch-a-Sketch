// javascript.js

const container = document.querySelector(".container");

for (let row = 0; row < 16; row++) {
    const rowContainer = document.createElement("div");
    rowContainer.style.display = "flex";
    rowContainer.style.flex = 1;
    rowContainer.style.backgroundColor = "grey";
    rowContainer.style.alignItems = "stretch";
    for (let col = 0; col < 16; col++) {
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        squareDiv.style.flex = "1";
        rowContainer.appendChild(squareDiv);
    }
    container.appendChild(rowContainer);
}

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