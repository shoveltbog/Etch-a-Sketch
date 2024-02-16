const container = document.querySelector('.container');

// create div grid function
function createGrid(container, rows, columns) {
    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row', 'cell');
        container.appendChild(rowDiv);

        for (let j = 0; j < columns; j++) {
            const colDiv = document.createElement('div');
            colDiv.classList.add('column', 'cell');
            rowDiv.appendChild(colDiv);

            colDiv.addEventListener('mouseenter', function() {
                this.classList.add('hovered');
            });
        }
    }
}

// create button input to set the number of cells

const btn = document.querySelector('body');

const gridButton = document.createElement('button');
gridButton.innerText = "Input Grid Size";
btn.insertBefore(gridButton, container);

// Function to alert user to input grid size upon click
gridButton.addEventListener('click', () => {
    const userInput = prompt("Enter the size of the grid (e.g., 16 for a 16x16 grid):");
    // use number from prompt to make grid size

});




