const container = document.querySelector('.container');

// create 16 x 16 div grid
for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'cell');
    container.appendChild(rowDiv);

    for (let j = 0; j < 16; j++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('column', 'cell');
        rowDiv.appendChild(colDiv);

        colDiv.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
    }
}
