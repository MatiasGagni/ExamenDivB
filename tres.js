/*Llegan 10 vuelos con vacunas de distintos lugares del mundo
Se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “USA”)
-Cantidad de vacunas (no puede ser 0)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió mayor cantidad de vacunas
b- El promedio de vacunas llegadas de Asia
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 4 millones de vacunas se hace un descuento de 30%, Si se recibieron entre 2 y 4 millones el descuento es del 20% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con descuento
Curso de ingreso UTN FRA*/



function mostrar()
{
	let origen;
	let cantidadDeVacunas;
	let costoDelVuelo;
	let mayorCantidadDeVacunas;
	let promAsia;
	let acumVacunas = 0;
	let importebruto = 0;
	let importefinal = 0;
	let acumVacunasAsia = 0;
	let acumVacunasEuropa = 0;
	let acumVacunasUSA = 0;
	let descuento = 0;
	let vuelosdeasia = 0;


	for( let i = 0 ; i<10; i++){

		origen = prompt("Ingrese el origen (asia/europa/USA)").toLowerCase();
		while( origen != "asia" && origen != "europa" && origen != "usa"){
			origen = prompt("Origen inválido. Ingrese el origen (asia/europa/USA)").toLowerCase();
		}

		cantidadDeVacunas = parseInt(prompt("Ingrese la cantidad de vacunas"));
		while(cantidadDeVacunas<0 || isNaN(cantidadDeVacunas)){
			cantidadDeVacunas = parseInt(prompt("Cantidad de vacunas inválida. Ingrese la cantidad de vacunas"));
		}

		costoDelVuelo = parseInt(prompt("Ingrese el costo del vuelo (entre 1 millon y 5 millones de pesos)"));
		while(costoDelVuelo<1000000 || costoDelVuelo>5000000 || isNaN(costoDelVuelo)){
			costoDelVuelo = parseInt(prompt("Costo inválido. Ingrese el costo del vuelo (entre 1 millon y 5 millones de pesos)"));
		}

		acumVacunas = acumVacunas + cantidadDeVacunas;

		if( origen == "asia"){
			acumVacunasAsia = acumVacunasAsia + cantidadDeVacunas;
			vuelosdeasia++;
		}else if( origen == "europa"){
			acumVacunasEuropa = acumVacunasEuropa + cantidadDeVacunas;
		}else{
			acumVacunasUSA = acumVacunasUSA + cantidadDeVacunas;
		}

		importebruto = importebruto + costoDelVuelo;
	}
	if(acumVacunasAsia>acumVacunasEuropa && acumVacunasAsia>acumVacunasUSA){
		mayorCantidadDeVacunas = origen;
	}else if(acumVacunasEuropa>=acumVacunasAsia && acumVacunasEuropa>acumVacunasUSA){
		mayorCantidadDeVacunas = origen;
	}else{
		mayorCantidadDeVacunas = origen;
	}

	promAsia = acumVacunasAsia/vuelosdeasia;

	if(acumVacunas>4000000 ){
		descuento = importebruto*0.30;
	}else if(acumVacunas<4000000 && acumVacunas>2000000){
		descuento = importebruto*0.20;
	}

	importefinal = importebruto-descuento;

	console.log("El origen que envió mayor cantidad de vacunas es " + mayorCantidadDeVacunas);
	console.log("El promedio de las vacunas llegadas de Asia es de " + promAsia);
	console.log("El total sin descuentos a pagar por los gastos de los viajes es " + importebruto);
	if( descuento == 0){
		console.log("No se efectuó ningún descuento");
	}else{
		console.log("Se descontaron " + descuento + " y el importe final es de " + importefinal);
	}
}
