function comprobarfecha() {
    //Comprueba que la fecha fin del curso sea posterior a la fecha de inicio. En caso de no serlo salta una ventana emergente informando
    //del error. 
    var fechainicio = document.getElementById("fechainicio").value;
    var fechafinal = document.getElementById("fechafin").value;

    if (fechafinal<fechainicio) {
        alert("La fecha final debe ser posterior a la fecha de inicio");
        return false;
        } 
}

function diasrestantes() {
    //Obtiene la duración del curso en días hasta la fecha fin del mismo.
    var fechainicio = document.getElementById("fechainicio").value;
    var fechafin = document.getElementById("fechafin").value;

    var inicio = new Date(fechainicio);
    var fin = new Date(fechafin);

    var diferencia = fin - inicio;
    //return diferencia;
    var dia = ((((diferencia/1000)/60)/60)/24);
    return dia;
}
