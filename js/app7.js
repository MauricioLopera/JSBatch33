function mostrarPanel(guia){
    if(guia == 1){
        document.getElementById("search").style.display = "block";
    }else{
        document.getElementById("search").style.display = "none";
    }
}

function redirect(){
    window.location.href("index.html");
}