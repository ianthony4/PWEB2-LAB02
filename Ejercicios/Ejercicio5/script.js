//Creando arreglo vacio
var valoresTabla = [];
function crear(){
    let cant = document.getElementById("cantidad").value;
    console.log(cant);
    
    //Añadiendo numeros aleatorios del 1 al 100 a cada valor de la tabla
    //Para crear aleatorio se usa Math.random junto con Math.floor 
    let aleatorio = 0;

    //Tabla - Cabeza
    let tabla = `<table>
    <tr>
        <th>Valores</th>
    </tr>`;
    for(let i=0;i<cant;i++){
        //uso de la funcion random
        aleatorio = Math.floor(Math.random() * 100 ) + 1;
        //se añaden los valores a la tabla
        valoresTabla.push(aleatorio);
        //usamos la metodo 'push' debido a que no nos intera la posicion en que agreguemos
        //los valores, solo necesitamos 'empujarlos' para que entren

        //Tabla - Cuerpo
        tabla += "<tr><td>"+aleatorio+"</td></tr>";
    }

    //Tabla - final
    tabla += "</tabla><br>";
    //Despues de la tabla crearemos el boton suma desde aqui
    let botonSumaHtml = `<button onclick="sumarValores()">Calcular Suma</button>`; 
    //Remplazamos la tabla y el boton en el html
    document.getElementById("formulario").innerHTML = tabla + botonSumaHtml;

}
//Esta funcion recibe un array y devuelve la suma de la tabla
function sumarValores(){
    let laSuma = 0;
    for(let i=0;i<valoresTabla.length;i++){
        laSuma += valoresTabla[i];
    }
    console.log(laSuma);
    document.getElementById("resultado").innerHTML = `<h4>El resultado es `+laSuma+`</h4>`;
    
}