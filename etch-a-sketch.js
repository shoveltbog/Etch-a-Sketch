const container = document.querySelector('.container');

// create div grid function
function createGrid(container, rows, columns) {
    const cellSize = Math.floor(Math.min(container.clientWidth / columns, container.clientHeight / rows));

    // Clear previous content in the container
    container.innerHTML = '';


    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row', 'cell');
        rowDiv.style.width = cellSize + 'px';
        rowDiv.style.height = cellSize + 'px';
        container.appendChild(rowDiv);

        for (let j = 0; j < columns; j++) {
            const colDiv = document.createElement('div');
            colDiv.classList.add('column', 'cell');
            colDiv.style.width = cellSize + 'px';
            colDiv.style.height = cellSize + 'px';
            rowDiv.appendChild(colDiv);

            colDiv.addEventListener('mouseenter', function() {
                // generate random RGB colour
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);

                // Set the background color to the generated random color
                this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

                this.classList.add('hovered');
            });
        }
    }
}

// create button input to set the number of cells

const btn = document.querySelector('body');

const gridButton = document.createElement('button');
gridButton.innerText = "Input Grid Size";
document.body.insertBefore(gridButton, container);

// Function to alert user to input grid size upon click
gridButton.addEventListener('click', () => {
    const userInput = prompt("Enter the size of the grid (e.g., 16 for a 16x16 grid):");
    // use number from prompt to make grid size
    if (userInput > 0 && userInput <= 100) {
        createGrid(container, userInput, userInput);
    }
    else (alert('Error please enter a number between 1 - 100'));
});




