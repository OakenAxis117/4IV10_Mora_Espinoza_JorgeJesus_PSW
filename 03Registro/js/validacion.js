/*
JavaScipt es un lenguaje que 
posee un paradigma orientado a objetos y a 
funciones, y a eventos por tal motivo presenta una particularidad que es:

No tipado
No existe int, float, string, char, ni nada:(

Todo es var -> varible

de acuerdo al estandar ES6 se manejan 3 tipos de variables

VAR es un objeto global
LET es una variable de tipo "Protected"
CONST es un valor constante

2006630189 2021090083
que no se te olvide bloquearlos
MIGJ861019HDFNMM08
CURP DEL JIMMY 
*/

function validar(formulario){
    
    if(formulario.nombre.value.lenght <= 3){
        alert("Favor de Ingresar mas de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var checarABC = "qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM";

    var cadenaNombre = formulario.nombre.value;

    //alert(cadenaNombre);

    var todoesvalido = true;

    for(var i = 0; i < cadenaNombre.lenght; i++)
    {
        var cadenaNombre = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++)
        {
            if(caracteres == checarABC.charAt(j))
            {
                break;
            }
        }
        if(j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Ingresa solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var edad = parseInt(formulario.edad.value.lenght);

    alert("edad");

    if((edad < 0) || (edad >= 99)) {
        alert("Favor de Ingresar una edad valida de entre 01 y 99 años");
        formulario.edad.focus();
        return false;
    }

    var checarABC = "0123456789";

    var cadenaNombre = formulario.edad.value;

    //alert(cadenaNombre);

    var todoesvalido = true;

    for(var i = 0; i < cadenaNombre.lenght; i++)
    {
        var cadenaNombre = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++)
        {
            if(caracteres == checarABC.charAt(j))
            {
                break;
            }
        }
        if(j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Ingresa solo numeros en el campo Edad");
        formulario.edad.focus();
        return false;
    }
}

var email = formulario.correo.value;


var prueba =  / ([Aa-Zz] + [0 - 9] + \.){10}\@/
([Aa-Zz] + [0 - 9]),{8}\.([Aa-Zz] + [0 - 9] + \.){3};

alert("Email " + (prueba.test(email) ? "" : " no " ) + "valido")

return prueba.test;