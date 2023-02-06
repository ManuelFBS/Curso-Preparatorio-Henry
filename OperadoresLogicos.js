/*function MayorYMenor(num) {
        if (num > 5 && num < 10) console.log(true);
        else console.log(false);
}

MayorYMenor(2);
MayorYMenor(7);*/

/*function MayorYMenorYPar(num) {
        if (num > 5 && num < 10 && num % 2 === 0) console.log(true);
        else console.log(false); 
}

MayorYMenorYPar(7);
MayorYMenorYPar(8);
MayorYMenorYPar(6);
MayorYMenorYPar(4);*/


/*function OperadorOr(str) {
        if (str === 'Henry' || str.length < 2) console.log(true);
        else console.log(false);
}

OperadorOr('Henry');
OperadorOr('Javascript');
OperadorOr('H');*/


/*function Negacion(permiso) {
        // if (permiso) console.log('Tiene permiso...');
        // if (!permiso) console.log('Tiene permiso...');
        // if (permiso === true) console.log('Tiene permiso...');
        if (permiso !== true) console.log('Tiene permiso...');
}

Negacion(true);
Negacion(false);*/


function CondicionCompleja(num) {
        if (num > 9 && num % 2 === 0 || num === 3) console.log(true);
        else console.log(false);
}

CondicionCompleja(10);
CondicionCompleja(6);
CondicionCompleja(3);
CondicionCompleja(5);


/*function MayoriaDeEdad(edad) {
        if (edad >= 18) {
                return "Allowed";
        }
        else {
                return "Not Allowed";
        }
}*/
/*function MayoriaDeEdad(edad) {
        if (edad >= 18) return "Allowed";
        else return "Not Allowed";
}

console.log(MayoriaDeEdad(21));
console.log(MayoriaDeEdad(16));*/