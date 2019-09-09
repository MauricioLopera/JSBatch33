let n1, n2, n3, sum, res, mul, div

n1 = prompt("Ingrese un numero")
n2 = prompt("Ingrese un numero")
n3 = prompt("Ingrese un numero")

if(n2 == 0){
    n2 = prompt("Numero 2 no puede ser 0, ingrese otro");
    if(n2 == 0){
        n2 = prompt("Explotará en 5 segundos.........");
    }else if(n3 == 0){
        n3 = prompt("Numero 3 no puede ser 0, ingrese otro");
        if(n3 == 0){
            n3 = prompt("Explotará en 5 segundos.........");
        }else{
            sum = Number(n1) + Number(n2) + Number(n3);
            res = Number(n1) - Number(n2) - Number(n3);
            mul = Number(n1) * Number(n2) * Number(n3);
            div = Math.round(Number(n1) / Number(n2) / Number(n3));
    
            alert("La suma es: " + sum + " la resta es: " + res + " la mult es: " + mul + " la div es: " + div);
        }
    }else{
        if(n3 == 0){
            n3 = prompt("Explotará en 5 segundos.........");
        }else{
            sum = Number(n1) + Number(n2) + Number(n3);
            res = Number(n1) - Number(n2) - Number(n3);
            mul = Number(n1) * Number(n2) * Number(n3);
            div = Math.round(Number(n1) / Number(n2) / Number(n3));
    
            alert("La suma es: " + sum + " la resta es: " + res + " la mult es: " + mul + " la div es: " + div);
        }
    }
}else{
    if(n3 == 0){
        n3 = prompt("Numero 3 no puede ser 0, ingrese otro");
        if(n3 == 0){
            n3 = prompt("Explotará en 5 segundos.........");
        }else{
            sum = Number(n1) + Number(n2) + Number(n3);
            res = Number(n1) - Number(n2) - Number(n3);
            mul = Number(n1) * Number(n2) * Number(n3);
            div = Math.round(Number(n1) / Number(n2) / Number(n3));
    
            alert("La suma es: " + sum + " la resta es: " + res + " la mult es: " + mul + " la div es: " + div);
        }
    }
}




