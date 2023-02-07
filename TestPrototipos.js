// class Empresa {
//         constructor() {
//                 this.empleado = [];
//         }
// }

// Empresa.prototype.agregarEmpleado = function(tipoEmpleado) {
//         this.empleado.push(tipoEmpleado);
// }

// var empresa = new Empresa();
// empresa.agregarEmpleado('Técnico en Electrónica');
// empresa.agregarEmpleado('Técnico en Electricista');
// empresa.agregarEmpleado('Mecánico III');
// empresa.agregarEmpleado('Maestro Soldador');
// empresa.agregarEmpleado('Buzo IV');
// console.log(empresa.empleado);

// ===================================================== //

// class Cliente {
//         constructor () {
//                 this.usuario = [];
//                 this.email = [];
//                 this.estado = [];
//         }
// }

// Cliente.prototype.agregarDatosUsuario = function(nombreU, emailU, estadoU) {
//         this.usuario.push(nombreU);
//         this.email.push(emailU);
//         this.estado.push(estadoU);
// }

// var clientes = new Cliente();
// clientes.agregarDatosUsuario('Manuel Borrego', 'manuelf.borrego@gmail.com', true);
// console.log(clientes.usuario);
// console.log(clientes.email);
// console.log(clientes.estado);

// =================================================================== //

class Usuarios {
        constructor () {
                this.usuario = { nombre: '', email: '', estado: false };
        }
}

Usuarios.prototype.incluirNuevoUsuario = function (nombreU, emailU, estadoU) {
        this.usuario.nombre = nombreU;
        this.usuario.email = emailU;
        this.usuario.estado = estadoU; 
}

var usuarioNew = new Usuarios();
usuarioNew.incluirNuevoUsuario('Manuel F. Borrego', 'manuelf.borrego@gmail.com', true);

console.log(usuarioNew.usuario);
