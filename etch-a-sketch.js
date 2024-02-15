const container = document.querySelector('.container');

// create 16 x 16 div grid
for (var i = 0; i < 16; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid');
    container.appendChild(gridDiv);
}
