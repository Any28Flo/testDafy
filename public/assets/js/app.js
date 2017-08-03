var url= "http://api.apixu.com/v1/forecast.json?key=b9a104b67a13490fae6233332170208&q=Argentina";

var plantilla="<h6>__clima__</h6>"+"<p>Wind:__wind__</p>"+
		"<p>Humidity: __humidity__</p>"+"<p>UV Index:__uv__</p>"+"<p>Pressure:__pressure__</p>";

var mostrarDetalles = function (){
	console.log("hola")
	// url = $(this).data("url");
	var $contenedor = $("#listaDetalle");
	var temp = document.createElement("p");  // Create with DOM
    
	$.getJSON(url, function(data){
		var $temperatura = data.forecast.forecastday[2];
		console.log($temperatura);
		temp.innerHTML = $temperatura;
		var $wind = $("<p>"+data.forecastday.day.maxwind_mph+"</p>");
		var $humedad = $("<p>"+data.forecastday.day.avghumidity+"</p>");
		var $uv = $("<p>"+data.forecastday.day.avgvis_km+"</p>")
		var $presure = $("<p>"+data.forecastday.day.totalprecip_mm+"</p>");
		$contenedor.append(temp);

	})
	
	


	

}
var cargaPagina = function (){
		$(document).on("click", "#bntEnviar" , mostrarDetalles)

}
 $(document).ready(cargaPagina);

