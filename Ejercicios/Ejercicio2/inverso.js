//Funcion que muestra la inversa
function showInv(){
    let elTexto = document.getElementById("texto").value;
    console.log(elTexto);
    let elInverso = invertir(elTexto);  


}
//Funcion que hara el procesode invertir la palabra o texto, recibe una cadena
function invertir(text){
    let rpta = "";
    //Proceso de invertir una palabra
    for(let i=0;i<=text.length;i++){
        //incrementamos la variable rpta con 'text' desde atras hacia adelante
        rpta += text.substr(text.length - i,1);
    }
    //retornar la rpta (inverso)
    return rpta;
}
