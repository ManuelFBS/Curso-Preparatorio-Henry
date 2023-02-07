// function ComplejoHabitacional(complejo, edificio, piso, apartamento) {
//         this.complejo = complejo;
//         this.edificio = edificio;
//         this.piso = piso;
//         this.apartamento = apartamento;

//         this.informacion = function() {
//                 console.log('Complejo ' + this.complejo + ', Torre ' + this.edificio + ', Piso ' + this.piso + '. Apto ' + this.apartamento);
//         }
// }

// let complejoHabitat = new ComplejoHabitacional('Parque Central', '\"Tajamar\"', 42, '42E');
// complejoHabitat.informacion();

// ================================================================================================= //

// class Mascotas {
//         constructor(genero, raza, tamaño, color) {
//                 this.genero= genero;
//                 this.raza = raza;
//                 this.tamaño = tamaño;
//                 this.color = color;
//         }

//         presentacion() {
//                 console.log('Es un ' + this.genero + ', de raza ' + this.raza + ' y de color ' + this.color);
//         }
// }

// let mascota = new Mascotas('Perro', '\"Pastor Belga\"', 'Grande', 'canela con negro');
// mascota.presentacion();
// console.log(mascota.raza + ' de tamaño ' + mascota.tamaño);

// ================================================================================================= //

class ArtesMarciales {
        constructor(peleador, arteMarcial) {
                this.peleador = peleador;
                this.arteMarcial = arteMarcial;
        }

        obtenerPeleador() {
                console.log(this.peleador + '. Arte marcial: ' + this.arteMarcial);
        }
}

var luchador1 = new ArtesMarciales('He Il Cho', 'Tae Kwondo');
var luchador2 = new ArtesMarciales('Rob Kaman', 'Kick Boxing');

luchador1.obtenerPeleador();
luchador2.obtenerPeleador();