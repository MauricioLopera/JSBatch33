let nota, cantidad
let arreglo = []
let suma = 0
let promedio = 0


cantidad = Number(prompt("Ingrese cuantas notas va a digitar"));

for(i=1; i<=cantidad; i++){
    nota=prompt("Ingrese la nota " + i);
    arreglo.push(nota);
    suma = suma + Number(nota);
}

function Promedio(sum, cant){
    
    promedio = sum / cant;

    alert("El promedio del estudiante es: " + promedio + " de las notas ingresadas que son: " + arreglo);
}

Promedio(suma,cantidad)

