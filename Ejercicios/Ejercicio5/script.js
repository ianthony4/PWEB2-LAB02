function crear(){
    let cant = document.getElementById("cantidad").value;
    console.log(cant);
    //Creando arreglo vacio
    var valoresTabla = [];
    //Añadiendo numeros aleatorios del 1 al 100 a cada valor de la tabla
    //Para crear aleatorio se usa Math.random junto con Math.floor 
    let aleatorio = 0;
    for(let i=0;i<cant;i++){
        //uso de la funcion random
        aleatorio = Math.floor(Math.random() * 100 ) + 1;
        

    }
}