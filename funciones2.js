function CuidadoConElConsoleLog(nombre) {
        console.log(nombre);
        return nombre;
}

function CuidadoConElConsoleog(nombre) {
        console.log(nombre);
}

function OtraFuncion() {
        return 'El nombre retornado por la función CuidadoConElConsoleLog es ' + 
        CuidadoConElConsoleLog('Manuel');
}

function CuidadoConElReturn(nombre) {
        return nombre;
        console.log(nombre);
}