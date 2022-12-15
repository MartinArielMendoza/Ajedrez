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

let titulo = document.getElementsByTagName("h1")[0];

titulo.className = 'colorMarron';

let usuario;
let password;
let usuarioLS;

usuarioLS = localStorage.getItem('usuario');
console.log(usuarioLS);

if (usuarioLS == null) {
    usuario = prompt("ingrese usuario.");
    password = prompt("ingrese contraseña.");

    localStorage.setItem("usuario", usuario);
} else {
    alert(`Hola ${usuarioLS}`)
}

swal("Como se mueve el caballo?", {
        buttons: {
            cancel: "Recto",
            catch: {
                text: "En forma de L",
                value: "correcto",
            },
            defeat: "En diagonal",
        },
    })
    .then((value) => {
        switch (value) {

            case "correcto":
                swal("Felicidades! Sabes la respuesta", "success");
                break;

            default:
                swal("Es enserio?");
        }
    });