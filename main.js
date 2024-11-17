const socket = new WebSocket("ws://localhost:8001");
const game = new Connect4();

const boardElement = document.getElementById('board');

// Renderowanie planszy
function renderBoard() {
    boardElement.innerHTML = '';
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            const disc = game.board[row][col];
            if (disc) cell.classList.add(disc);
            cell.dataset.column = col;
            boardElement.appendChild(cell);
        }
    }
}

// Kliknięcie w kolumnę
boardElement.addEventListener('click', (event) => {
    const column = event.target.dataset.column;
    if (column !== undefined) {
        const move = game.dropDisc(parseInt(column));
        if (move) {
            socket.send(JSON.stringify(move));
            renderBoard();
        }
    }
});

// Obsługa wiadomości WebSocket
socket.onmessage = (event) => {
    const { row, column, player } = JSON.parse(event.data);
    game.board[row][column] = player;
    renderBoard();
};

renderBoard();
