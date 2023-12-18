salario = 2500000
function MacondoCaso1(){

  compra = prompt('1- almojabana con gaseosa 15000  2- subway con gaseosa 23000 ')
  if (compra == 1){
     salario = salario - 15000
     prompt ('le caera mal porque lleva mucho en el stand')
  }else if (compra == 2){
     salario = salario -23000
     prompt ('estara llenito y bien');
  }else {
    prompt('no compro nada y le tocara comprar algo en medellin');
  }

  prompt ('tu salario actual es: ' + salario);

}


function MacondoCaso2 (){

    let altoOriginal = 60;
    let largoOriginal = 40;
    let anchoOriginal = 20;


    const altoAerolinea = 55; 
    const largoAerolinea = 40;
    const anchoAerolinea = 20; 


    const ReduccionAlto = altoAerolinea / altoOriginal;
    const ReduccionLargo = largoAerolinea / largoOriginal;
    const ReduccionAncho = anchoAerolinea / anchoOriginal;


    const Reduccion = Math.min(ReduccionAlto, ReduccionLargo, ReduccionAncho);


    const nuevoAlto = altoOriginal * Reduccion;
    const nuevoLargo = largoOriginal * Reduccion;
    const nuevoAncho = anchoOriginal * Reduccion;

    prompt("Las nuevas dimensiones de la maleta ajustada son:");
    prompt(`Alto: ${nuevoAlto} cm`);
    prompt(`Largo: ${nuevoLargo} cm`);
    prompt(`Ancho: ${nuevoAncho} cm`);

    
}




function MacondoCaso3(){
    const horaUsoWifi = 50000;
    const sueldoMenosWifi = salario - horaUsoWifi

    const codigo1 = parseInt('01110010', 2);
    const codigo2 = parseInt('01101001', 2);
    const codigo3 = parseInt('01110111', 2);
    const codigo4 = parseInt('01101001', 2);


    const caracter1 = String.fromCharCode(codigo1);
    const caracter2 = String.fromCharCode(codigo2);
    const caracter3 = String.fromCharCode(codigo3);
    const caracter4 = String.fromCharCode(codigo4); 


    prompt ( ' riwi es la contraseña');
    prompt ('tu salario restante es: ', sueldoMenosWifi);


}



function MacondoCaso4(){
  
  let taxi = 'taxi me puede llevar al hotel mariposas amarillas'
  let vocal = taxi.replace(/[aeiou]/g, "i")
  prompt (vocal);
}



function MacondoCaso5 (){ 
    
  const pagarTaxista = 300000;
  taxi = prompt ('1) gana taxista y se descuentan 300000  2) gana hildebrando y no paga nada')
  if (taxi == 1){
    salario = salario - pagarTaxista;
      prompt ('gana taxista y pagas la tarifa');
      prompt ('salario restante: ' + salario);
  } else if (taxi == 2){
    prompt ('gana hildebrando y no paga nada');
  } else {
    prompt('empate, no pasa nada');
  }
}



function MacondoCaso6 (){
  let decisionDia = prompt('¿Que color de actividades eliges para el dia? amarillo, verde, azul, rojo')

  switch (decisionDia){
     case 'amarillo':
      let decisionAmarillo = prompt('Ir a la piscina? si/no');
      if (decisionAmarillo == 'si'){
        prompt ('El agua huele raro, pero no le pone importancia');
        prompt ('Empieza a sentirse ahogado, demasiado cloro, muere.... Terminan las vacaciones');
      } else {
        prompt ('No pasa nada');
      }
      break; 

      case 'verde':
      let decisionVerde = prompt('¿Ir toda la caminata? si/no'); 
      if (decisionVerde == 'si'){
        prompt('Ira a una hermosa cascada y se tomara fotos');
      } else {
        prompt ('Llegara a cierto punto, y se devolvera solo de noche y se pierde');
      }

      break;

      case 'rojo':
        let decisionRojo = prompt('Actividades en la playa, /Juega voleibol / Nada en el mar ')
        if (decisionRojo == 'Voleibol'){
          prompt ('juega y la pasa genial');
        } else {
          let nadar = prompt('¿Nadar en el mar? si/no');
        if (nadar == 'si'){
           prompt ('Nada en el mar, y monta monto');
           prompt ('Se pone a tomar concteles mientras descansa, de pronto siente un fuerte dolor de cabeza y empieza a perder visión, chirrinchi adulterado, se tiene que devolver de emergencia. Terminan las vacaciones');
        }
        }
        break; 

        case 'azul':
          let decisionAzul = prompt('Actividades dentro del hotel, 1- bingo, 2- bailar, 3- casino')
          if (decisionAzul == '1'){
            prompt ('Juega bingo, se lo gana y aumenta su dinero');
          } if (decisionAzul == '2'){
            prompt ('Baila, y se la pasa muy bien'); 
          } if (decisionAzul == '3'){
            prompt ('Casino y apuesta, solo se queda con el pasaje de regreso y terminan las vaciones');
          } 
  }
}




/*
let texto = 'taxi me puede llevar al hotel mariposas amarillas'
let letra = prompt ('eliga la letra a reemplazar');

if (letra == /[aeiou]/g,''){
   texto = letra.replace
} */

