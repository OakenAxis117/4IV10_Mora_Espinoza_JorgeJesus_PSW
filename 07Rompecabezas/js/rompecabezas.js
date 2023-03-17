/*
    primero tenemos que hacer un mapeo sobre las imagenes que se van a trabajar por que tenemos que saber
    donde esta situada cada una de ellas y apartir de ello compararla con la imagen principal, 
    si hacen match ganamos, si no  hay que seguir comparando el orden hasta que coincidan
*/ 

var instrucciones = ["Utiliza las flechas para mover las piezas", 
"Ordena las piezas hasta alcanzar el objetivo"];

//aqui van las flechas
var movimientos = [];

//vamos a crear la matriz para las posiciones del rompecabeza
var rompe = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

var rompeCorrecto = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//tenemos que identificar donde esta el punto de partida de la pieza vacia
var filaVacia = 2;
var columnaVacia = 2;

//necesito una funcion para recorrer el arreglo para pasar por cada elemento
function mostrarInstrucciones(intrucciones){
    for(i=0; 1<intrucciones.length; i++){
        //otra funcion que enliste la instruccion
        mostrarInstruccionesEnLista(instrucciones[i],
            "lista-intrucciones");
    }
}

function mostrarInstruccionesEnLista(){
    var ul = document.getElementById(idLista);
    //ahora agregamos li
    var li = document.createElement("li");
    // a agregar
    li.textContent = instruccion;
    ul.appendChild(li);
}

//vamos a crear una funcion para checar si ganamos
function checarSiGane(){
    //tengo que reccorrer las piezas y saber si coinciden 
    for(i=0 ; i< rompe.length ; i++){
        for(j=0 ; j<rompe[i].length ; j++){
            var rompeActual = rompe[i][j];
            if(rompeActual !== rompeCorrecto[i][j]){
                return false;
            }
        }
    }
    return true;
}

//funcion para decir que si gane
function mostrarCartelGanador(){
    if(checarSiGane()){
        alert("Wiiiiiiiiiii a mimir (o.o)/");
    }
    return false;
}

/** vamos a crear una funcion que se encargue de poder intercambiar las posiciones 
 * de las piezzas por que dentro del rompecabezas 
 * necesitamos mover
 * arreglo[1][2] = arreglo[0][0]
 * arreglo[0][0] = arreglo[1][2]
 */

function intercambiarPosicionesRompe(filaPos1, columnaPos1, filaPos2, columnaPos2){
    //mis variables de las posiciones
    var pos1 = rompe[filaPos1][columnaPos1];
    var pos2 = rompe[filaPos2][columnaPos2];

    //intercambio

    rompe[filaPos1][columnaPos1] = pos2;
    rompe[filaPos2][columnaPos2] = pos1;
}

//tenemos que actualizar la pieza vacia por que esa es la que se mueve
function actualizarPosicionVacia(nuevaFila, nuevaColumna){
    filaVacia = nuevaFila;
    columnaVacia = nuevaColumna;

}

//validar si la poscision dentro del rompecabezas es la correcta de la pieza

function posicionValida(fila, Columna){
    return(fila >= 0 && fila <= 2 && columna >= 0 && columna <= 2);
}

/**
 * ahora viene la parte del movimiento de las piezas, a lo que el hueco se estara moviendo 
 * intercambiando las posiciones, para ello tenemos que saber que teclas se estan presionando
 * y hacia que direccion debe moverse
 * de ahi el codigo es: arriba 38, abajo 40, izquierda 37, derecha 39
 */

function moverEnDireccion(direccion){
    var nuevaFilaVacia;
    var nuevaColumnaVacia;

    //si se mueve hacia abajo?
    if(direccion === codigosDireccion.ABAJO){
        nuevaFilaVacia = filaVacia + 1;
        nuevaColumnaVacia = columnaVacia;
    }

    //si se mueve hacia arriba
    else if(direccion === codigosDireccion.ARRIBA){
        nuevaFilaVacia = filaVacia - 1;
        nuevaColumnaVacia = columnaVacia;
    }

    //si se mueve hacia derecha
    else if(direccion === codigosDireccion.DERECHA){
        nuevaFilaVacia = filaVacia;
        nuevaColumnaVacia = columnaVacia + 1;
    }

    //si se mueve hacia izquierda
    else if(direccion === codigosDireccion.IZQUIERDA){
        nuevaFilaVacia = filaVacia;
        nuevaColumnaVacia = columnaVacia - 1;
    }

    //tengo que checar si la nueva posicion es valida y si no, intercambiarla

    if(posicionValida(nuevaFilaVacia, nuevaColumnaVacia)){
        //intercambio
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaVacia, nuevaColumnaVacia);
        //actualizar la posicion
        actualizarPosicionVacia(nuevaFilaVacia, nuevaColumnaVacia);
        //agregar el ultimo movimiento
        agregarUltimoMovimiento(direccion);
    }
}

function intercambiarPosiciones(fila1, columna1, fila2, columna2){
    //por que vamos a intercambiar posiciones de acuerdo a las piezas

    var pieza1 = rompe[fila1][columna1];
    var pieza2 = rompe[fila2][columna2];

    //mando a llamar a intercambiar las posiciones del rompecabezas
    intercambiarPosicionesRompe(fila1, columna1, fila2, columna2);

    //falta crear una funcion que cambie las posiciones en el DOM
    intercambiarPosicionesDOM('pieza' + pieza1, 'pieza' + pieza2);
}

function intercambiarPosicionesDom(idPieza1, idPieza2){
    var elementoPieza1 = document.getElementById(idPieza1);
    var elementoPieza2 = document.getElementById(idPieza2);

    //creo al padre
    var padre = elementoPieza1.parentNode;

    var cloneElemento1 = elementoPieza1.cloneNode(true);
    var cloneElemento2 = elementoPieza2.cloneNode(true);

    padre.replaceChild(cloneElemento1, elementoPieza2);
    padre.replaceChild(cloneElemento2, elementoPieza1);
}

// vamos a identificar los codigos de la direccion de la flecha

var codigoDireccion = {
    IZQUIERDA : 37,
    ARRIBA : 38,
    DERECHA : 39,
    ABAJO : 40
};

//vamos a actualizar los movimientos
function actualizarUltimoMovimiento(direccion){
    //obtenemos el elemento del DOM
    var ultimoMovimiento = document.getElementById('flecha');
    switch(direccion){
        case codigoDireccion.ARRIBA:
            ultimoMovimiento.textContent = '';
            break;
        case codigoDireccion.ABAJO:
            ultimoMovimiento.textContent = '↓';
            break;
        case codigoDireccion.DERECHA:
            ultimoMovimiento.textContent = '';
            break;
        case codigoDireccion.IZQUIERDA:
            ultimoMovimiento.textContent = '←';
             break;
    }
}

function mezclarPiezas(veces){
    if(veces <= 0){
        alert("Holi wii")
        return;
    }

    var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA, codigosDireccion.DERECHA,
    codigosDireccion.IZQUIERDA];

    var direccion = direcciones[Math.floor(Math.random)* direcciones.length];

    moverEnDireccion(direccion);

    setTimeout(function(){
        mezclarPiezas(vaces - 1);

    }, 100);
}

function capturarTeclas(){
    document.body.onkeydown = (function(){
        if(event.which === codigosDireccion.ABAJO || event.which === codigosDireccion.ARRIBA ||
            event.which === codigosDireccion.DERECHA || event.which === codigosDireccion.IZQUIERDA){
                moverEnDireccion(evento.which);

                actualizarUltimoMovimiento(event.which);

                var gano = checarSiGane();

                if(gano){
                    setTimeout(function(){
                        mostrarCartelGanador();
                    }, 500)

                }
                evento.preventDefault;
            }
    })
}

function iniciar(){
    mezclarPiezas(30);
    capturarTeclas();

}

iniciar();