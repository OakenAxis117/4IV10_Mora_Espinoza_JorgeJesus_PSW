function validar(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    
    return patron.test(codigo);
}

function interes(){

    var valor = document.getElementsById("cantidad").value;

    var result = parseInt(valor);

    var interes = result * 0.02;

    var total = result + interes;

    document.getElementById("cantidadi").value = "$ " + total;
}

function borrar(){

    document.getElementById("cantidad").value = "";
    document.getElementById("cantidadi").value = "";
}