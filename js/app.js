setTimeout(solicitarNombre, 3000);

function solicitarNombre() {
    let nombreIngresado = prompt("Ingrese su nombre");
    if (nombreIngresado != "") {
        alert("Bienvenido: " + nombreIngresado);
    }
}

const WIDTH = 600;
const HEIGHT = 600;

const FILES = 8;
const RANKS = 8;

const CELL_WIDTH = WIDTH / FILES;
const CELL_HEIGHT = HEIGHT / RANKS;

const $canvas = document.createElement('canvas');
const ctx = $canvas.getContext('2d');

const theme = {
    light: '#FFFFFF',
    dark: '#CC6600',
}

//♕♛♔♚♖♜♗♝♘♞♙♟
const pieces = {
    king: 'king',
    queen: 'queen',
    rook: 'rook',
    bishop: 'bishop',
    knight: 'knight',
    pawn: '♟',
}

$canvas.width = WIDTH;
$canvas.height = HEIGHT;

ctx.textAlign = 'center';
ctx.textBaseline = 'bottom';
ctx.font = '10px Arial';

document.body.appendChild($canvas);
document.body.style.padding = '30px';

const boardMatrix = [];
for (let x = 0; x < FILES; x += 1) {
    boardMatrix[x] = [];
    for (let y = 0; y < RANKS; y += 1) {
        boardMatrix[x][y] = null;
        let rectColor = theme.light;
        let textColor = theme.dark;

        if ((x + y) % 2) {
            rectColor = theme.dark;
            textColor = theme.light;
        }

        ctx.fillStyle = rectColor;
        ctx.fillRect(x * CELL_WIDTH, y * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);

        ctx.fillStyle = textColor;
        ctx.fillText(`[${x};${y}]`, x * CELL_WIDTH + CELL_WIDTH / 2, y * CELL_HEIGHT + CELL_HEIGHT);
    }
}