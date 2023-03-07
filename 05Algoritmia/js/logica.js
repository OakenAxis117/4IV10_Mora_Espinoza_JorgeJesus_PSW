//problema 1



//problema 2
function problema2(){
    var x = document.getElementById['p2-x1','p2-x2','p2-x3','p2-x4','p2-x5'];
    var y = document.getElementById['p2-y1','p2-y2','p2-y3','p2-y4','p2-y5'];
    var result = [];

    for(i = 0; i < 5; i++){
        result = x[i] * y[i];
    }

    document.getElementById('p2-output').innerHTML = result[i];
}


//problema3

function problema3(){
    //primero se define un alfabeto
    var alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //vamos a obeter la entrada de datos
    var p3_input = document.querySelector('#p3-input').value;

    //lo que necesitamos es separar todo por comas
    var p3_palabras = p3_input.split(',');

    //se necesita una funcion que se encargue de recuperar cada palabra
    //Tengo que eliminar los espacios
    p3_palabras = p3_palabras.map(function(palabras){
        return palabras.replace(/\s/g, '').toUpperCase();
    });
    //hay que calcular los caracteres unicos
    var p3_res = '';
    //una funcion que se encargue de calcular que contiene el arreglo y separar cada aracter y contarlo
    p3_palabras.forEach(function(palabra, i){

        var letras_unicas = [];
        var palabra_array = palabra.split('');

        //debo iterar el alfabeto
        alfabeto.forEach{function(letra, j)} {
            //itero cada palabra
            palabra.forEach(function(letras, palabras, k){
                //comprobar que la letra este dentro del alfabeto
                if(letras_palabras == letra){
                    //si la letra no ha sido contada la agregamos a un array para contar las letra unicas

                    if(letras_unicas.indexOf(letra)<0){
                        letras_unicas.push(letra);
                    }
                }
            });
        }
        //contar salida
        p3_res += 'Palabra: ' += palabra + ' = ' + letras_unicas.length + '\n';

    });

    //imprimir salida
    document.querySelector('#p3-output').textContent = p3_res;
}