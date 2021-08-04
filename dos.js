/*El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa más encontrada
d- Edad del mayor extranjero contagiado
e- Cantidad de personas argentinas contagiadas con la delta
Curso de ingreso UTN FRA*/


function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let contPositivos = 0;
    let porcentajePositivos;
    let porcentajeNegativos;
    let contNegativos = 0;
    let contAlfa = 0;
    let contBeta = 0;
    let contDelta = 0;
    let maxEdadExtranjero;
    let ContArg = 0;
    let contPersonas = 0;
    let cepaMasEncontrada;
    let flag = 0;
    
    for( let i = 0 ; i<8 ; i++){
        
        nacionalidad = prompt("Ingrese su nacionalidad (argentina/extranjero)").toLowerCase();
        while( nacionalidad != "argentina" && nacionalidad != "extranjero"){
            nacionalidad = prompt("Nacionalidad inválida. Ingrese su nacionalidad (argentina/extranjero)").toLowerCase();
        }

        resultado = prompt("Ingrese su resultado (positivo o negativo)").toLowerCase();
        while( resultado != "positivo" && resultado != "negativo"){
            resultado = prompt("Su resultado no es válido. Ingrese su resultado (positivo o negativo)").toLowerCase();
        }

        edad = parseInt(prompt("Ingrese su edad (entre 18 y 65 años)"));
        while( edad<18 || edad > 65){
            edad = parseInt(prompt("Edad inválida. Ingrese su edad (entre 18 y 65 años"));
        }
        if(resultado == "positivo"){
            cepa = prompt("Ingrese su cepa (delta/alfa/beta/ninguna)").toLowerCase(); 
            while( cepa != "delta" && cepa != "alfa" && cepa != "beta" ){
                cepa = prompt("Cepa inválida. Ingrese su cepa (delta/alfa/beta/ninguna)").toLowerCase();
            }
            contPositivos++;
            
        }else if(resultado == "negativo"){
            cepa = prompt("Ingrese su cepa (delta/alfa/beta/ninguna)").toLowerCase();
            while(cepa != "ninguna"){
                cepa = prompt("Cepa inválida. Ingrese su cepa (ninguna)").toLowerCase();
            }
            contNegativos++;
        }

        contPersonas++;

        if( cepa == "delta"){
            if(nacionalidad == "argentina"){
                ContArg++;
            }
            contDelta++;
        }else if(cepa == "alfa"){
            contAlfa++;
        }else{
            contBeta++;
        }

        if(contDelta> contAlfa && contDelta>contBeta){
            cepaMasEncontrada = cepa;
        }else if( contAlfa>= contDelta && contAlfa>contBeta){
            cepaMasEncontrada = cepa;
        }else {
            cepaMasEncontrada = cepa;
        }

        if( (flag == 0 && nacionalidad == "extranjero") || (nacionalidad=="extranjero" && edad>maxEdadExtranjero)){
            maxEdadExtranjero = edad;
        
        }



        

    }
    porcentajePositivos = contPersonas/contPositivos;
    porcentajeNegativos = contPersonas/contNegativos;


    console.log("El porcentaje de positivos es " + porcentajePositivos + "%");
    console.log("El porcentaje de negativos " + porcentajeNegativos + "%");
    console.log("La cepa mas encontrada es "+ cepaMasEncontrada);
    console.log("La edad del mayor extranjero contagiado es " + maxEdadExtranjero );
    console.log("La cantiadad de argentinos contagiados con delta es "+ ContArg);
}
