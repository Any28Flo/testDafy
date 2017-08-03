var url= "http://api.apixu.com/v1/forecast.json?key=b9a104b67a13490fae6233332170208&q=Argentina";

var detAallesSemana = function (){
	 var $contenedorSemana = (".infoSemana")
	 var contenedorInfo = document.createElement("div");
	 var fecha = document.createElement("span");
	 var tempMin = document.createElement("span");
	 var tempMax = document.createElement("span");
	var urlDias = "http://api.apixu.com/v1/forecast.json?key=b9a104b67a13490fae6233332170208&q=Argentina&days=7";
	$.getJSON (urlDias,function(data){
			for (var i = 0 ; i< 7 ; i++){

			$elemento = data.forecast.forecastday[i];
			var $infoFecha = $elemento.date;
			var $maxTemp = $elemento.day.maxtemp_c;
			var $minTemp = $elemento.day.mintemp_c;
			// temp.innerHTML = $temperatura+"°";
			fecha.innerHTML=$infoFecha;
			tempMax.innerHTML = $maxTemp;
			tempMin.innerHTML = $minTemp;

			contenedorInfo.append= $infoFecha;
			contenedorInfo.append = $maxTemp;
			contenedorInfo.append = $minTemp;
			$contenedorSemana.append =contenedorInfo;
			}
	})
}

var mostrarDetalles = function (){

	var $contenedor = $("#temperatura");
	var temp = document.createElement("h3");  // Create with DOM
    var viento = document.createElement("p");
    var divHumedad = document.createElement("p");
    var divUv = document.createElement("p");
    var divPresure =  document.createElement("p");

	$.getJSON(url, function(data){
		var $arregloClima = data.forecast.forecastday[0];
		var $temperatura = $arregloClima.day.maxtemp_c;
		var $vientos= $arregloClima.day.maxwind_mph;
		var $humedad = $arregloClima.day.avghumidity;
		var $uv = $arregloClima.day.avgvis_km;
		var $presure = $arregloClima.day.totalprecip_mm;
		temp.innerHTML = $temperatura+"°";
		viento.innerHTML ="Wind: "+$vientos+"m/s";
		divHumedad.innerHTML ="Humidity: "+$humedad+"%";
		divUv.innerHTML ="Uv Index: "+$uv;
		divPresure.innerHTML = "Pressure: "+$presure;
		$contenedor.append(temp);
		$contenedor.append(viento);
		$contenedor.append(divHumedad);
		$contenedor.append(divUv);
		$contenedor.append(divPresure);

	})
	
	


	

}
var cargaPagina = function (){
		mostrarDetalles();
		detAallesSemana();
		// $(document).on("click", "#bntEnviar" , mostrarDetalles)

}
 $(document).ready(cargaPagina);

