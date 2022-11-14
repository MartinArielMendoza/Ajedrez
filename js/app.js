//setTimeout(solicitarNombre, 3000);

/*function solicitarNombre() {
    let nombreIngresado = prompt("Ingrese su nombre");
    if (nombreIngresado != "") {
        alert("Bienvenido: " + nombreIngresado);
    }
}*/

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
const piecesTheme = {
    light: '#FFFFFF',
    dark: '#000000',
}

const pieces = {
    king: ['♚', '♔'],
    queen: ['♛', '♕'],
    rook: ['♜', '♖'],
    bishop: ['♝', '♗'],
    knight: ['♞', '♘'],
    pawn: ['♟', '♙'],
}

$canvas.width = WIDTH;
$canvas.height = HEIGHT;

document.body.appendChild($canvas);
document.body.style.padding = '30px';

const renderBoard = () => {
    for (let x = 0; x < FILES; x += 1) {
        for (let y = 0; y < RANKS; y += 1) {
            let rectColor = theme.light;
            let textColor = theme.dark;

            if ((x + y) % 2) {
                rectColor = theme.dark;
                textColor = theme.light;
            }

            ctx.fillStyle = rectColor;
            ctx.fillRect(x * CELL_WIDTH, y * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);

            const pieces = boardMatrix[x][y];
            if (pieces) {
                ctx.fillStyle = pieces.color;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.font = '56px Arial';
                ctx.fillStyle = pieces.color
                ctx.fillText(pieces.type[0], x * CELL_WIDTH + CELL_WIDTH / 2, y * CELL_HEIGHT + CELL_HEIGHT);
                ctx.fillStyle = piecesTheme.dark;
                ctx.fillText(pieces.type[1], x * CELL_WIDTH + CELL_WIDTH / 2, y * CELL_HEIGHT + CELL_HEIGHT);
            }
        }
    }
}

const boardMatrix = [];
for (let x = 0; x < FILES; x += 1) {
    boardMatrix[x] = [];
    for (let y = 0; y < RANKS; y += 1) {
        boardMatrix[x][y] = null;
    }
}

for (let i = 0; i < RANKS; i += 1) {
    boardMatrix[i][1] = {
        type: pieces.pawn,
        color: theme.dark,
    }
    boardMatrix[i][6] = {
        type: pieces.pawn,
        color: theme.light,
    }
}

for (let i = 0; i < 2; i += 1) {
    boardMatrix[0][i * 7] = {
        type: pieces.rook,
        color: i ? theme.light : theme.dark,
    }
    boardMatrix[7][i * 7] = {
        type: pieces.rook,
        color: i ? theme.light : theme.dark,
    }
    boardMatrix[1][i * 7] = {
        type: pieces.knight,
        color: i ? theme.light : theme.dark,
    }
    boardMatrix[6][i * 7] = {
        type: pieces.knight,
        color: i ? theme.light : theme.dark,
    }
    boardMatrix[2][i * 7] = {
        type: pieces.bishop,
        color: i ? theme.light : theme.dark,
    }
    boardMatrix[5][i * 7] = {
        type: pieces.bishop,
        color: i ? theme.light : theme.dark,
    }
    boardMatrix[3][i * 7] = {
        type: pieces.queen,
        color: i ? theme.light : theme.dark,
    }
    boardMatrix[4][i * 7] = {
        type: pieces.king,
        color: i ? theme.light : theme.dark,
    }
}
renderBoard();

const tiposDeFichas = ['1 peon', '2 torre', '3 caballo', '4 alfil', '5 reina', '6 rey'];

console.log(tiposDeFichas.length);

function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}
porCadaUno(tiposDeFichas, console.log)

class Piezas {
    constructor(movimiento) {
        this.movimiento = movimiento;
    }

    verEspecificaciones() {
        console.log(this.movimiento);
    }
}

const pieza1 = new Piezas("1 El peon solo se mueve hacia delante, de una casilla. Una excepcion es la primera vez, se puede mover dos casillas.");
const pieza2 = new Piezas("2 La torre se mueve en una linea recta horizontal o vertical a lo largo del tablero. No puede saltar otras piezas");
const pieza3 = new Piezas("3 El caballo puede saltar sobre casillas ocupadas y moverse dos espacios en vertical y uno en horizontal o viceversa, haciendo la forma de una L");
const pieza4 = new Piezas("4 El alfil puede mover en diagonal (casillas del mismo color) a lo largo del tablero. No puede saltar otras piezas");
const pieza5 = new Piezas("5  La reina se mueve como la torre y el alfil juntos. Se puede mover cualquier numero de casillas en linea recta, tanto de manera horizontal como vertical o diagonal.");
const pieza6 = new Piezas("6 El rey solo puede mover de a una casilla horizontal, vertical o diagonalmente.");

pieza1.verEspecificaciones();
pieza2.verEspecificaciones();
pieza3.verEspecificaciones();
pieza4.verEspecificaciones();
pieza5.verEspecificaciones();
pieza6.verEspecificaciones();