class Persona {
        constructor(nombre, edad) {
                this.nombre = nombre;
                this.edad = edad;
        }

        saludar() {
                console.log('Hola, mi nombre es ' + this.nombre + '. Tengo ' + this.edad + ' años.');
        }
}

// Clase que se extiende a partir de la clase 'Persona'...
class Programador extends Persona {
        constructor(nombre, edad, añosDeExperiencia) {
                super(nombre, edad);
                this.añosDeExperiencia = añosDeExperiencia;
        }

        codear() {
                console.log('Soy ' + this.nombre + '. Codeo desde hace ' + this.añosDeExperiencia + ' años');
        }
}

var nombrePersona = new Persona('Manuel', 60);
var programador = new Programador('María', 37, 4);
nombrePersona.saludar();
// programador.codear();
programador.saludar();