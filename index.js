function calculaVelocidad (distancia, tiempo){

    return distancia/tiempo
}

let participantes = parseInt(prompt("Ingrese cantidad de participantes"));

let resultado;

for (let index = 0; index < participantes; index++) {
    let nombre = prompt("Ingrese nombre del participante");
    let distancia = parseInt(prompt("Ingrese KM recorridos"));
    let tiempo = parseInt(prompt("Ingrese cantidad de horas del trayecto"));

    let velocidad = calculaVelocidad(distancia,tiempo);

    

    if (index==0){
        resultado = "--------RESULTADOS DE LA MARATON---------"+"\n"
    }

    resultado = resultado + nombre +" recorrio "+distancia+" km durante "+tiempo+" horas a una velocidad promedio de "+velocidad+"km/h \n"
  
}

alert(resultado);