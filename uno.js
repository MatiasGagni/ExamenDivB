/*Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la rusa
b- Nombre y vacuna de la mujer con más edad
c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
e- Vacuna menos inoculada*/



function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let seguir;
	let acumRusa = 0;
	let contRusa = 0;
	let promRusa;
	let maxEdad;
	let flag = 0;
	let nombreMaxEdad;
	let vacunaMaxEdad;
	let acumedadAmericana;
	let contEdadMayorAmericana = 0;
	let porcentaje;
	let contVacunados = 0;
	let porcentaje2;
	let vacunados2Dosis = 0;
	let contAmericana = 0;
	let contChina = 0;
	let vacunaMenosUsada;

	do{

		nombre = prompt("Ingrese su nombre");
		while (nombre.length < 3 || nombre.length > 10){
			nombre = prompt("Ese nombre es inválido, ya que debe tener un mínimo de 3 caracteres y un maximo de 10");
		}

		edad = parseInt(prompt("Ingrese su edad (solo están permitidas edades mayores o iguales a 12)"));
		while( edad<12){
			edad = parseInt(prompt("Esa edad es inválida. Ingrese su edad (solo están permitidas edades mayores o iguales a 12)"));
		}

		vacuna = prompt("Ingrese la vacuna que recibió (rusa/china/americana). Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana ").toLowerCase();
		
				while (edad >= 12 && edad <= 17 &&  vacuna != "americana") {
					vacuna = prompt("Vacuna incorrecta. Ingese la americana").toLowerCase();
				}
		while (vacuna != "americana" && vacuna != "rusa" && vacuna != "china"){
					while (vacuna != "rusa" && vacuna != "americana" && vacuna != "china") {
						vacuna = prompt("Vacuna inválida. Ingrese la vacuna (rusa/americana/china)").toLowerCase();
					}
			

		}

		dosis = prompt("Ingrese la dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)").toLowerCase();
		while( dosis != "s" && dosis != "p"){
			dosis = prompt("Esa dosis no es correcta. Ingrese la dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)").toLowerCase();		}

		sexo = prompt("Ingrese su sexo (femenino(f)/masculino(m)").toLowerCase();
		while (sexo != "f" && sexo != "m"){
			sexo = prompt("Eso no es un sexo válido. Ingrese su sexo (femenino(f)/masculino(m)").toLowerCase();

		}

		if( vacuna == "rusa"){
			acumRusa = acumRusa + edad;
			contRusa++;
		}else if(vacuna == "americana"){
			acumedadAmericana = acumedadAmericana + edad;
			contAmericana++;
			if( edad >= 18){
				contEdadMayorAmericana++;
			}
		}else{ 
			contChina;
		}


		if((flag == 0 && sexo == "f") || (edad>maxEdad && sexo == "f")){
			nombreMaxEdad = nombre;
			vacunaMaxEdad = vacuna;
			flag = 1;
		}

		contVacunados++;

		if( dosis == "s"){
			vacunados2Dosis++;
		}

		

		seguir =  prompt("¿Desea seguir ingresando datos? (s)");
	}while(seguir == "s");
	
	promRusa = acumRusa/contRusa;

	porcentaje = acumedadAmericana/contEdadMayorAmericana;

	porcentaje2 = contVacunados/vacunados2Dosis;

	if(contRusa<contAmericana && contRusa<contChina){
		vacunaMenosUsada = vacuna;
	}else if(contAmericana<=contRusa && contAmericana<contChina){
		vacunaMenosUsada = vacuna;
	}else{
		vacunaMenosUsada = vacuna;
	}

	console.log("El promedio de edad entre los que se vacunaron con la rusa es de " + promRusa);
	console.log("El nombre de la mujer con más edad es " + nombreMaxEdad + " y su vacuna es " + vacunaMaxEdad);
	console.log("El porcentaje de los mayores de edad que recibieron la vacuna americana es " + porcentaje + "%");
	console.log("El porcentaje de los que tienen 2 dosis es " + porcentaje2 +"%");
	console.log("La vacuna menos usada es la " + vacunaMenosUsada);
}
