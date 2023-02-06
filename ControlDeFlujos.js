function Viajar (destino) {
        if (destino === 'Brasil') {
                console.log('Gire a la IZQUIERDA');
        }
        else if (destino === 'Argentina') {
                console.log('Gire a la DERECHA');
        }
        else {
                console.log('Nos PERDIMOS !!!');
        }
}

Viajar('Brasil');

function PuedeManejar (edad) {
        if (edad >= 18) {
                console.log('Es mayor de edad. Si está autorizado para manejar...');
        }
        else {
                console.log('Es menor de edad. Negado el permiso...');
        }
}

PuedeManejar(15);

function EsVerdad (argumento) {
        if (argumento == 'verdad') {
                console.log(true);
        }
        else {
                console.log(false);
        }
}

EsVerdad('verdad');
EsVerdad('otro...');