class Jugador {
        constructor(nombre, edad) {
                this.nombre = nombre;
                this.edad = edad;
        }

        info() {
                console.log('Nombre del jugador: ' + this.nombre + '. Edad: ' + this.edad);
        }
}

class Football extends Jugador {
        constructor(nombre, edad, posicion, equipo) {
                super(nombre, edad);
                this.posicion = posicion;
                this.equipo = equipo;
        }

        infoJugadorFB() {
                console.log('Jugadores de Football:');
                console.log('Nombre: ' + this.nombre + '. Edad: ' + this.edad + '. Posición: ' + this.posicion + '. Equipo: ' + this.equipo);
        }
}

class Baseball extends Jugador {
        constructor(nombre, edad, equipo, contrato) {
                super(nombre, edad);
                this.equipo = equipo;
                this.contrato = contrato;
        }

        infoJugadorBB() {
                console.log('Jugadores de Baseball:');
                console.log('Nombre: ' + this.nombre + '. Edad: ' + this.edad + '. Equipo: ' + this.equipo + '. Contrato: ' + this.contrato);
        }
}

let player = new Jugador('Alfonzo Rodríguez', 27);
player.info();
console.log('\n');

let playerFB = new Football('Carlos Uribe', 24, 'Delantero Izquierdo', 'Manchester United');
let playerBB = new Baseball('Ernesto Macedo', 28, 'Boston Red Sox', '35 millones de $$ x 3 años');

playerFB.infoJugadorFB();
// console.log('\n');
playerBB.infoJugadorBB();