document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('game-board');
    const resetBtn = document.getElementById('reset-btn');
    
    // Estado inicial del tablero
    let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null];
    
    // Función para renderizar el tablero
    function renderBoard() {
        board.innerHTML = '';
        tiles.forEach(tile => {
            const tileDiv = document.createElement('div');
            tileDiv.textContent = tile;
            tileDiv.className = tile ? 'tile' : 'tile empty';
            board.appendChild(tileDiv);
        });
    }
    
    // Función para mezclar las fichas
    function shuffle() {
        for (let i = tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
        }
        renderBoard();
    }
    
    // Evento para reiniciar el juego
    resetBtn.addEventListener('click', shuffle);
    
    // Iniciar el tablero
    renderBoard();
});
