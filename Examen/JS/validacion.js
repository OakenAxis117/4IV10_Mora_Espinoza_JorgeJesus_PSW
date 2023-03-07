function interes_final(){

    var capini = document.getElementById('cap_ini');
    var time = document.getElementById('time_input');
    var interes = document.getElementById('int_input');
    
    var interesf = interes * capini;
    interesf = interesf + capini;

    var capf = (1 + interes)^time;
    capf = capf * capini;

    //cuota

    var inter = (interes + 1);
    inter = inter^time;
    var cuota = inter * interes;
    cuota = cuota / (inter - 1);
    cuota = cuota * capini;

    //despliegue

    document.getElementById('capini').innerHTML = capsini;
    document.getElementById('interes').innerHTML = interesf;
    document.getElementById('tiempo').innerHTML = time;
    document.getElementById('cap_fin').innerHTML = capf;
    document.getElementById('cuota').innerHTML = cuota;

    return false;
}
