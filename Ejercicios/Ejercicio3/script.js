let hoy = new Date();
console.log(hoy);
//De w3scholls https://www.w3schools.com/jsref/jsref_obj_date.asp
//Obtenemos los siguientes metodos para un objeto date que se usaran para resolver el problema

//difiniremos el dia festivo
let diaAqp = new Date(hoy.getFullYear(),7,15);
//calculo de los dias que faltan
//Aqui hay 2 caminos, si la variable 'hoy' es antes del dia festivo y si la misma es despues del dia festivo
//se diferenciara eso con un if
if(hoy.getMonth() >= 7 && hoy.getDate() > 15){
	diaAqp.setFullYear(hoy.getFullYear()+1);	
}
//En w3schools encontramos la siguiente funcion y/o atributo de date ".getTime()"
//este metodo devuelve la cantidad de milisegundos desde la fecha actual hasta la fecha del 1 de enero de 1970
//restaremos la fecha del dia festiva - la fecha actual, eso dara como resultados cuandos milisegundos faltan hasta la fecha festiva
//luego lo convertimos a horas y podemos redondear

//Para redondear usaremos Math.round() y la sumaremos +1 para un numero un poco mas cercano

let diasFaltantes = Math.round((diaAqp.getTime() - hoy.getTime())/(1000 * 60 * 60 * 24))+1; //con esta operacion 1000*60... convertimos a dias

//agregandolo al html
document.getElementById("dias").innerHTML = diasFaltantes;

