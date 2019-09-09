let frutas
let canasta = []
let canasta2 = []
let cantidad = 0

cantidad = Number(prompt("Ingrese la cantidad de frutas en la canasta"));

for(i=1; i<=cantidad; i++){
    frutas = prompt("Ingrese el nombre de la fruta " + i);
    canasta.push(frutas);
}

frutas = ""
// for(i=1; i<canasta.length; i+=2){
//     frutas = frutas + " " + canasta[i];
//     //canasta2.push(canasta[i]);
// }

for(i=0; i<canasta.length; i++){
    if(canasta[i]=="Sandia"){
        alert("Habeis ingresado una Sandia en la posicion :" + (i + 1));
    }
    if((i + 1) % 2 === 0){
        frutas = frutas + " " + canasta[i];
    }
}

alert("Las Frutas pares son: " + frutas);



