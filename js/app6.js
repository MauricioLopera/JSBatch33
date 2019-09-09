function Promedio(sum, cant){
    let prom

    prom = sum / cant;

    document.getElementById("res").innerHTML="El promedio es " + prom;
}

function Datos(){
    
    let suma, cantidad

    suma = Number(document.getElementById("num1").value);
    cantidad = Number(document.getElementById("num2").value);

    Promedio(suma,cantidad)
}

