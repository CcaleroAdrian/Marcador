<?php
	$equipoA = isset($_POST['equipoA']) ? trim($_POST['equipoA']) : "";
	$equipoB = isset($_POST['equipoB']) ? trim($_POST['equipoB']) : "";
	$colorA = isset($_POST['colorA']) ? trim($_POST['colorA']) : "" ;
	$colorB = isset($_POST['colorB']) ? trim($_POST['colorB']) : "";
	$cronometro = isset($_POST['A']) ? trim($_POST['A']) : "";
	$etiqueta = isset($_POST['B']) ? trim($_POST['B']) : "";
	$alternancia = isset($_POST['D']) ? trim($_POST['D']) : "";
	$periodo = isset($_POST['C']) ? trim($_POST['C']) : "";

 ?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="jquery-1.12.2.min.js"></script>
	<script type="text/javascript" src="funciones.js"></script>
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
	<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
	
</head>
<script type="text/javascript">
	function mostrar(){
		window.open("popup.php", "_parent", 'width=333px,height=273px,resizable=yes,toolbar=no'); return false;
	}

	$(document).ready(function(){
		var equipoA = "<?php echo $colorA; ?>";
		var equipoB = "<?php echo $colorB; ?>";
		var cronometro = "<?php echo $cronometro ?>";
		var etiqueta = "<?php echo $etiqueta ?>";
		var alternancia = "<?php echo $alternancia ?>";
		var periodo = "<?php echo $periodo ?>";
	
		if (equipoA != "") {
			document.getElementById('equipoA').style.color = String(equipoA);
			document.getElementById('marcadorA').style.color = String(equipoA);
			document.getElementById('faltasA').style.color = String(equipoA);
			document.getElementById('tiemposA').style.color = String(equipoA);
		}

		if (equipoB != "") {
			document.getElementById('equipoB').style.color = String(equipoB);
			document.getElementById('marcadorB').style.color = String(equipoB);
			document.getElementById('faltasB').style.color = String(equipoB);
			document.getElementById('tiemposB').style.color = String(equipoB);
		}

		if (cronometro != "") {
			document.getElementById('minutos').style.color = String(cronometro);
			document.getElementById('segundos').style.color = String(cronometro);
		}

		if (etiqueta != "") {
			$('H1').attr("color",etiqueta);
		}

		if (periodo != "") {
			document.getElementById('periodo').style.color = String(periodo);
		}

		if (alternancia != "") {
			document.getElementById('alternanciaA').style.color = String(alternancia);
			document.getElementById('alternanciaB').style.color = String(alternancia);
		}
	});
</script>
<body style="background-color: black;">
	<table width="100%">
		<tr>
			<td width="30%" height="50px"></span><H1 style="margin-left: 20px;">ALTERNANCIA</H1></td>
			<td width="30%" height="50px"><H1>TIEMPO</H1></td>
			<td width="30%" height="50px"><H1>ALTERNANCIA</H1></td>
		</tr>
		<tr>
			<td><input id="alternanciaA" type="text" readonly value="<"></input></td>
			<td rowspan="2" class="form-inline"><input id="minutos" type="number" color="#8080ff" readonly value="0" min="0" max="0"><input type="text" readonly value=":" style="width: 18px; height: 180px; font-size:100px; border: none; text-align: justify;"></input> <input id="segundos" type="number" readonly value="0" min="0" max="59"></input></td>
			<td><input id="alternanciaB" type="" readonly></input></td>
		</tr>
		<tr>
			<td width="30%" height="50px"><H1>LOCAL</H1></td>
			<td width="30%" height="50px"><H1>VISITANTE</H1></td>
		</tr>
		<tr>
			<td><input id="equipoA" type="text" readonly value="<?php echo $equipoA; ?>"></input></td>
			<td width="30%" height="50px"><H1>PERIODO</H1></td>
			<td><input id="equipoB" type="text" readonly value="<?php echo $equipoB; ?>"></input></td>
		</tr>
		<tr>
			<td width="30%" height="50px"><input id="marcadorA" type="number" min="00" max="200" readonly value="0"></input></td>
			<td width="30%" height="50px"><input id="periodo" type="number" min="1" max="4" readonly  value="1"></input></td>
			<td width="30%" height="50px"><input id="marcadorB" type="number" min="00" max="200" readonly value="0"></input></td>
		</tr>
		<tr>
			<td colspan="3"><hr style="background-color: white; height: 5px;"></td>
		</tr>
	</table>
	<table width="100%">
		<tr>
			<td><H1>FALTAS</H1></td>
			<td><H1>T.F.</H1></td>
			<td><H1>T.F.</H1></td>
			<td><H1>FALTAS</H1></td>
		</tr>
		<tr>
			<td><input id="faltasA" type="number" readonly value="0" min="0" max="5"></input></td>
			<td><input id="tiemposA" type="number" readonly value="3" min="0" max="3"></input></td>
			<td><input id="tiemposB" type="number" readonly value="3" min="0" max="3"></input></td>
			<td><input id="faltasB" type="number" readonly value="0" min="0" max="5"></input></td>
		</tr>
	</table>
	<div style="bottom: 0px; width: 120px; margin-top:5px;"><button type="button" class="btn btn-default btn-lg" style="background-color: black;" onclick="mostrar()">
		<span class="glyphicon glyphicon-cog" style="color:white;"></span>
	</button></div>
</body>
</html>