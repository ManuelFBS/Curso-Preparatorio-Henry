// var deportes = { 
//         conBalon: ['Futbol', 'Basketball', 'Golf'], 
//         sinBalon: ['Boxeo', 'Surf', 'Trekking'], 
// };

// var persona = {
//         nombre: 'Manuel', edad: 60, estudios: { esProgramador: true }
// };

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.estudios.esProgramador);

// persona.nombre = 'Manuel Felipe';
// persona.edad = 61;

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.estudios.esProgramador);

// ----------------------------------------------------------------------------

// var autos = {};
// console.log(autos);

// autos.marcas = ['Ford', 'Audi', 'Ferrari'];
// console.log(autos);
// console.log(autos.marcas);

// delete autos.marcas;
// console.log(autos);

// ----------------------------------------------------------------------------

// var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Medias'] };
// console.log(atuendos);
// console.log(atuendos.pies);
// atuendos["piernas"] = ['Bermudas', 'Pantalones'];
// console.log(atuendos);

// ----------------------------------------------------------------------------

// var comidas = {};
// var diferenciaDeNotaciones = function (propUno, propDos) {
//         comidas[propUno] = ['Frutas', 'Vegetales'];
//         comidas[propDos] = ['Hamburguesa', 'Papas Fritas'];
// };
// diferenciaDeNotaciones('saludable', 'noSaludable');
// console.log(comidas);

// ----------------------------------------------------------------------------

// var libro = { autor: 'Borges', genero: 'Policial', año: '1990' };
// var tienePropiedad = libro.hasOwnProperty("nombre");
// console.log(tienePropiedad);
// tienePropiedad = libro.hasOwnProperty("autor");
// console.log(tienePropiedad);

// var todasLasPropiedades = Object.keys(libro);
// console.log(todasLasPropiedades);

// var mundo = { continentes: 7, países: 195, oceanos: 5 };
// for (var prop in mundo) {
//         console.log('Esta es la propiedad: ' + prop);
//         console.log('Este es su valor: ' + mundo[prop]);
// }

// ----------------------------------------------------------------------------

var mascota = {
        animal: 'Perro', 
        raza: 'Pastor Alemán', 
        amistoso: true, 
        dueño: 'María López', 
        info: function () {
                console.log('El perro es un ' + this.raza);
        }
};

// console.log(mascota);
mascota.info();

// var todoElObjeto = Object.entries(mascota);
// console.log(todoElObjeto);
