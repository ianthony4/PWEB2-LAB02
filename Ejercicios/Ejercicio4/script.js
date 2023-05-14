//En esta funcion extraemos el texto y la mandamos  'acortar' enviandole el texto
function mostrar(){
    let enlace = document.getElementById("enlace").value;
    console.log(enlace);
    let acortado = acortar(enlace);
    document.getElementById("resultado").innerHTML = acortado;
}
//En esta funcion procesamos el texto y lo mandamos como respuesta
function acortar(enlace){
    let aux = "";
    if(enlace.length == 28){
        aux = enlace.slice(16,19)+enlace.slice(20,24)+enlace.slice(25,28);
    }else if(enlace.length == 36){
        aux = enlace.slice(24,27)+enlace.slice(28,32)+enlace.slice(33,36);
    }else{
        aux = "Error, URL no valida";
    }
    return aux;
}