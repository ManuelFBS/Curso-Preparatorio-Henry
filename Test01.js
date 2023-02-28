// function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:

   // if (num <= 1) return false;
   // for (var i = 2; i < num; i++) {
   //      if ((num % i) > 0) return true;
   //      else return false;
   // }
   /*var valor;
   if (num < 0) valor = false;

   for (var i = 2; i < num; i++) {
      if ((num % i) > 0) return valor = true;
      else valor = false;
   }

   return valor;*/
// }

// console.log(esPrimo(37));
// console.log(esPrimo(13));
// console.log(esPrimo(0));
// console.log(esPrimo(-7));
// console.log(esPrimo(1));
// console.log(esPrimo(17));

// function numeroMasGrande(arrayOfNums) {
//    // El parámetro "arrayOfNums" es un arreglo de números.
//    // Retornar el número más grande.
//    // Tu código:
//    var mayor = 0;
//    for(i = 0; i < arrayOfNums.length; i++) {
//       if (arrayOfNums[i] > mayor)
//       {
//           mayor = arrayOfNums[i];
//       }
//   }
//   return mayor;
// }

// var arr = [45, 98, 21, 74, 119, 93, 68];
// var numMayor = numeroMasGrande(arr);

// console.log(numMayor);

/*function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numStr = num.toString();
   var array = numStr.split('');
   // console.log(array);
   if (array[0] === '9') return true;
   return false;
}

var comienzaCon9 = empiezaConNueve(98);
console.log(comienzaCon9);
var comienzaCon9 = empiezaConNueve(117);
console.log(comienzaCon9);
var comienzaCon9 = empiezaConNueve(438);
console.log(comienzaCon9);
var comienzaCon9 = empiezaConNueve(90007);
console.log(comienzaCon9);*/


// function breakStatement(num) {
//    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
//    // Guardar cada nuevo valor en un arreglo y retornarlo.
//    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
//    // la ejecución y retornar el string: "Se interrumpió la ejecución".
//    // [PISTA]: utiliza el statement 'break'.
//    // Tu código:
//    // var suma = 0;
//    var arraySuma = [];
//    var interrupcion = false;
//    for (var i = 0; i < 10; i++) {
//       num += 2;
//       arraySuma.push(num);
//       if (num === 10) {
//          interrupcion = true;
//          break;
//       }
//    }
//    if (interrupcion) return arraySuma + ' Se interrumpió la ejecución';
//    else return arraySuma;
// }

// var result = breakStatement(-6);

// console.log(result);

// ============================================================= //

// split, join...
// var palabra = 'Henri';
// var palabraSeparada = palabra.split('');     // 'split' convierte un string en
//                                                         // en un arreglo, donde cada elemento 
//                                                         // contendrá un sub-string, dependiendo 
//                                                         // del parámetro divisor que indiquemos.

// console.log(palabraSeparada);

// palabraSeparada.pop();
// palabraSeparada.push('y');
// console.log(palabraSeparada);

// var palabraArreglada = palabraSeparada.join('');     // 'join', realiza lo contrario
//                                                                                  // de 'split'...
// console.log(palabraArreglada);

let nombreDerecho = 'Manuel';
let nombreSeparado = nombreDerecho.split('');
console.log(nombreDerecho + ' => ' + nombreSeparado);

let nombreAlRevesSep = [];
for (let i = nombreSeparado.length - 1; i >= 0; i--) {
   nombreAlRevesSep.push(nombreSeparado[i]);
}

// console.log(nombreAlRevesSep);
let nombreAlRevesUnido = nombreAlRevesSep.join('');
console.log(nombreAlRevesUnido);