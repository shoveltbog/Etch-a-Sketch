const container = document.querySelector('.container');

// create 16 x 16 div grid
for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    container.appendChild(rowDiv);

    for (let j = 0; j < 16; j++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('column');
        container.appendChild(colDiv);
    }
}
