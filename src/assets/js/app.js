var url= "http://api.apixu.com/v1/forecast.json?key=b9a104b67a13490fae6233332170208&q=Argentina";

var plantilla="<h6>__clima__</h6>"+"<p>Wind:__wind__</p>"+
		"<p>Humidity: __humidity__</p>"+"<p>UV Index:__uv__</p>"+"<p>Pressure:__pressure__</p>";

var mostrarDetalles = function (){
	console.log("hola")
	// url = $(this).data("url");
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
		// $(document).on("click", "#bntEnviar" , mostrarDetalles)

}
 $(document).ready(cargaPagina);

