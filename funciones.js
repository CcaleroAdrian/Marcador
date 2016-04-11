var Cronometro;
var playing = false;
var audio = new Audio('Bocina.mp3');
function info(e){
	var evento = e || window.event;
	var codigoTecla = evento.charCode;
	//var Contador = 1;
	//**********Activar Cronometro **********************
	//if (Contador <= 1) {
		if (codigoTecla == 111) {
				
				Cronometro = setInterval(function(){
					if ($('#segundos').val() >= 1 || $('#minutos').val() != 0 ) {

						if ($('#segundos').val() == 0 && $('#minutos').val() != 0) {
							$('#minutos').val(parseInt($('#minutos').val()) - 1);
							$('#segundos').val(59);
						}else{
							$('#segundos').val(parseInt($('#segundos').val()) - 1);
						}
					}

					if ($('#minutos').val() == 0 && $('#segundos').val() == 0) {
						playing = true;
						if (playing == true) {
							audio.play();
							playing = false;
							clearInterval(Cronometro);
						}
					}

				},1000);
		}
	//}


	//**********Pausar Cronometro **********************
	if (codigoTecla == 112) {
		clearInterval(Cronometro);
	}


	//*****************FUNCIONES ESPECIFICAS******************
	//Aumentar minutos
	if (codigoTecla == 113) { //Tecla Q
		if ($('#minutos').val() <= 19) {
			$('#minutos').val(parseInt($('#minutos').val()) + 1);
		}
	}
	//Disminuir minutos
	if (codigoTecla == 119) { //Tecla W
		if ($('#minutos').val() >= 1) {
			$('#minutos').val(parseInt($('#minutos').val()) - 1);
		}
	}
	//Aumentar segundos
	if (codigoTecla == 101) { //Tecla E
		if ($('#segundos').val() <= 59) {
			
			if ($('#segundos').val() == 59) {
				$('#minutos').val(parseInt($('#minutos').val()) + 1);
				$('#segundos').val(0);
			}else{
				$('#segundos').val(parseInt($('#segundos').val()) + 1);
			}
			
		}
	}
	//Disminuir segundos
	if (codigoTecla == 114) { //Tecla R
		if ($('#segundos').val() >= 1 || $('#minutos').val() != 0 ) {

			if ($('#segundos').val() == 0 && $('#minutos').val() != 0) {
				$('#minutos').val(parseInt($('#minutos').val()) - 1);
				$('#segundos').val(59);
			}else{
				$('#segundos').val(parseInt($('#segundos').val()) - 1);
			}
			
		}
	}
	//Aumentar periodo
	if (codigoTecla == 116) { //Tecla T
		if ($('#periodo').val() <= 3) {
			$('#periodo').val(parseInt($('#periodo').val()) + 1);
		}
	}
	//Disminuir periodo
	if (codigoTecla == 121) { //Tecla Y
		if ($('#periodo').val() >= 2) {
			$('#periodo').val(parseInt($('#periodo').val()) - 1);
		}
	}

	
	//****************FUNCIONES DE EQUIPO A ***********************
	//Aumentar marcadorA
	if (codigoTecla == 97) { //Tecla A
		if ($('#marcadorA').val() <= 199) {
			$('#marcadorA').val(parseInt($('#marcadorA').val()) + 1);
		}
	}
	//Disminuir marcadorA
	if (codigoTecla == 115) { //Tecla S
		if ($('#marcadorA').val() >= 1 ) {
			$('#marcadorA').val(parseInt($('#marcadorA').val()) - 1);
		}
	}
	//Aumentar faltasA
	if (codigoTecla == 100) { //Tecla D
		if ($('#faltasA').val() <= 4) {
			$('#faltasA').val(parseInt($('#faltasA').val()) + 1);
		}
	}
	//Disminuir faltasA
	if (codigoTecla == 102) { //Tecla F
		if ($('#faltasA').val() >= 1) {
			$('#faltasA').val(parseInt($('#faltasA').val()) - 1);
		}
	}
	//Aumentar TFA
	if (codigoTecla == 103) {//Tecla G
		if ($('#tiemposA').val() <= 2) {
			$('#tiemposA').val(parseInt($('#tiemposA').val()) + 1);
		}
	}
	//Disminuir TFA
	if (codigoTecla == 104) {//Tecla H
		if ($('#tiemposA').val() >= 1) {
			$('#tiemposA').val(parseInt($('#tiemposA').val()) - 1);
		}
	}

	//alternanciaA
	if (codigoTecla == 117) {
		$('#alternanciaA').val('<');
		$('#alternanciaB').val('');
	}


	//****************FUNCIONES DE EQUIPO B ***********************

	//Aumentar marcadorB
	if (codigoTecla == 122) { //Tecla Z
		if ($('#marcadorB').val() <= 199) {
			$('#marcadorB').val(parseInt($('#marcadorB').val()) + 1);
		}
	}
	//Disminuir marcadorB
	if (codigoTecla == 120) { //Tecla X
		if ($('#marcadorB').val() >= 1 ) {
			$('#marcadorB').val(parseInt($('#marcadorB').val()) - 1);
		}
	}
	//Aumentar faltasB
	if (codigoTecla == 99) { //Tecla C
		if ($('#faltasB').val() <= 4) {
			$('#faltasB').val(parseInt($('#faltasB').val()) + 1);
		}
	}
	//Disminuir faltasB
	if (codigoTecla == 118) { //Tecla V
		if ($('#faltasB').val() >= 1) {
			$('#faltasB').val(parseInt($('#faltasB').val()) - 1);
		}
	}
	//Aumentar TFB
	if (codigoTecla == 98) {//Tecla B
		if ($('#tiemposB').val() <= 2) {
			$('#tiemposB').val(parseInt($('#tiemposB').val()) + 1);
		}
	}
	//Disminuir TFB
	if (codigoTecla == 110) {//Tecla N
		if ($('#tiemposB').val() >= 1) {
			$('#tiemposB').val(parseInt($('#tiemposB').val()) - 1);
		}
	}
	//alternanciaB
	if (codigoTecla == 105) {
		$('#alternanciaB').val('>');
		$('#alternanciaA').val('');
	}
}

window.onload = function() { //acceso a los eventos.
	document.onkeypress = info;
}