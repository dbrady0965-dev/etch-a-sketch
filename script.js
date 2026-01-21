function makeGrids(size) {
    let screen = document.querySelector(".sketch-screen");
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column")
        column.style.width = "16px";
        for (let j = 1; j <= size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.width = "16px";
            row.style.border = "2px solid black";
            row.innerText = (i * size) + j;
            column.appendChild(row);
        }
        screen.appendChild(column);
    }
}

makeGrids(16);
