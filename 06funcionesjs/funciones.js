/*Las variables que se ocupan dentro de java script:
var que actualmente esta en sustitucion , 
let que es una variable protegida que solo funciona dentro de una funcion o metodo 
declarado en un fragmento de codigo, y const la cual es el valor constante en todo 
el documento y no puede cambiar su estado*/

/*var x = "x";

if(true){
    //declaramos la constante
    var x = "y";
    console.log(x);
}

console.log(x);


//diferencia entre funcion y funcion flecha
//la comilla alrevez se ocupa para modificar el comportamiento de html o incrustar en js codigo de html

function sumarFuncionNormal(n1,n2){
    return n1+n2;
}

console.log(`la suma de (3,4):$(sumarFuncionNormal(3,4))`);

/*una funcion flecha tiene como estructura
*cadena* -> id, clase, name, atributo

const sumarFuncionFlecha = (n1, n2) => n1+n2;

console.log(`la suma de (3,4): $(sumarFuncionFlecha(5,6))`);*/

const razasDePerros = [
    "Gran Danes",
    "Pastor Aleman",
    "Chihuahua",
    "Pitbull",
    "Dalmata",
    "San Bernardo"
]
/*
for(let indice = 0; indice < razasDePerros.length; indice ++){
    console.log(razasDePerros[indice]);
}

for(const raza of razasDePerros){
    console.log(raza);
}

for(const indice in razasDePerros){
    console.log(razasDePerros[indice]);
}*/

//forEach es poder iterar sobre elementos del arreglo que no devuelven nada
razasDePerros.forEach((raza, indice, arregloOriginal) => {
    console.log(raza)
})
/*
metodo find
metodo indexof
metodo map
metodo sort

*/ 