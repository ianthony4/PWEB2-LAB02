let hoy = new Date();
console.log(hoy);
//De w3scholls https://www.w3schools.com/jsref/jsref_obj_date.asp
//Obtenemos los siguientes metodos para un objeto date que se usaran para resolver el problema

//difiniremos el dia festivo
let diaAqp = new Date(hoy.getFullYear(),7,15);
//calculo de los dias que faltan
//Aqui hay 2 caminos, si la variable 'hoy' es antes del dia festivo y si la misma es despues del dia festivo
//se diferenciara eso con un if
if(hoy.getMonth() >= 7 && hoy.getDate()>15){
	
}else{
		console.log(estamos antes de la fecha);
}
console.log(diaAqp);

