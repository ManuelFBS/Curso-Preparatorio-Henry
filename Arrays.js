// var listaDeCompras = [];
// listaDeCompras[3] = 'Tomates';
// listaDeCompras[1] = 'Lechuga';

// console.log(listaDeCompras);

// // Ver Lista de compras...
// var elementoDelArray = listaDeCompras[1];
// console.log(elementoDelArray);

// console.log(listaDeCompras.length);

// // Length...
// var nombres = ['Matías', 'María', 'Diego', 'Rosa'].length;
// console.log(nombres);

// var colores = ["amarillo", "azul"];
// console.log(colores);

// push, unshift...
// colores.push('rojo');    // Adiciona un elemento al array [de último]...
// colores.unshift('verde');     // // Adiciona un elemento al array [de primero]...
// console.log(colores);

// pop, shift...
// colores.pop();     // Elimina el último elemento...
// console.log(colores);
// colores.shift();     // Elimina el 1er elemento...
// console.log(colores);

// =============================================================

// includes...
// var pintores = ['Picasso', 'Velásquez', 'Van Gogh', 'Dalí'];
// var incluyeDali = pintores.includes('Dalí');     // Busca un elemento dentro del
//                                                                       // array [si está o no incluído ]...

// console.log(incluyeDali);

// =============================================================

// every...
// var numeros = [1, 6, 8, 9];
// var numeros = [10, 6, 8, 9];
// var CumplenCondicion = numeros.every((num) => {
//         return num > 5;
// });     // 'every' es un método que sirve para determinar si todos los elementos
//         // de un array cumplen con una condición dada...

// console.log(CumplenCondicion);

// =============================================================

// split, join...
// var palabra = 'Henri';
// var palabraSeparada = palabra.split('');     // 'split' convierte un string en
//                                                         // en un arreglo, donde cada elemento 
//                                                         // contendrá un sub-string, dependiendo 
//                                                         // del parámetro divisor que indiquemos.

// console.log(palabraSeparada);

// palabraSeparada.pop();
// palabraSeparada.push('y');
// // console.log(palabraSeparada);

// var palabraArreglada = palabraSeparada.join('');     // 'join', realiza lo contrario
//                                                                                  // de 'split'...
// console.log(palabraArreglada);

// =============================================================

// foreach...
// var numeros = [1, 2, 3, 4];
// numeros.forEach((num) => console.log(num));
// numeros.forEach((num) => {
//         if (num === 3) {
//                 console.log(num)
//         }
// });

// var masUno = numeros.map(num => {
//         return num + 1
// });
// console.log(masUno);


// =============================================================
// =============================================================


// ejemplo (personal) del uso de 'split', 'unshift', 'push', 'shift', 'pop', y 'join'...
/*var frase = 'Esta es solo una frase de varias palabras';
var palabrasVarias = frase.split(' ');

console.log(palabrasVarias);
console.log(palabrasVarias.length);

palabrasVarias.shift();
palabrasVarias.shift();
palabrasVarias.unshift('vemos, ')
palabrasVarias.unshift('Aquí');
palabrasVarias.pop();
palabrasVarias.pop();
palabrasVarias.push('varios');
console.log(palabrasVarias);
palabrasVarias.push('vocablos!!!');
console.log(palabrasVarias);

var uniendoPalabras = palabrasVarias.join(' ');
console.log(uniendoPalabras);*/

// =============================================================

// function encontrarLetraP(string) {
//         var letras = string.split('');
//         var cont = 0;
//         for (let i = 0; i < letras.length; i++) {
//                 if (letras[i] === 'p') {
//                         cont++;
//                         console.log('Sí contiene la letra \'p\'');
//                         break;
//                 }
//         }
//         if (cont === 0) console.log(string + ' No contiene la letra buscada...!');
// }

// encontrarLetraP('Javascript');
// encontrarLetraP('Henry');
// encontrarLetraP('Estipulado');

// =============================================================

var arr = [];
// while (arr.length < 5) {
//         arr.push('BOOM');
// }

// console.log(arr);

var n = 0;
while (arr.length < 5) {
        n++;
        arr.push('Elemento' + n);
}

console.log(arr);

// =============================================================