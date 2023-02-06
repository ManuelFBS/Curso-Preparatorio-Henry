/*function SumaTres(x) {
        console.log(x + 3);
}

SumaTres(5);*/

// ---------------------------------------------------------------------------------------------- //

// OTRAS FORMAS DE EXPRESAR O DECLARAR UNA FUNCION...

// PRIMERO...
function SumaTres(x) {
        return x + 3;
}

// SEGUNDO...
var SumaTres = function(x) {
        return x + 3;
}

// TERCERO...
var SumaTres = (x) => {
        return x + 3;
}