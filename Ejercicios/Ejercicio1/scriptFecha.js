function respuesta(){
    //Obtenemos el dia del 'input' donde se entrega el numero
    let elDia = document.getElementById("num").value;
    console.log(elDia) //Para ir comprobando en el navegador
    //Se creara un arreglo usando 'const' debido a que solo agregaremos 7 dias
    const semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    //ahora obtendremos el dia de la semana 'string' con la variable 'elDia'
    let rpta = semana[elDia];
    console.log(rpta); //para comprobar
    //Ahora cambiamos el documento html por el valor de 'rpta'
    document.getElementById("respuesta").innerHTML = rpta;
}
