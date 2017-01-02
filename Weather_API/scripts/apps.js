//example of working OpenWeatherMap for weather info

$.get("http://api.openweathermap.org/data/2.5/weather?q=Bradford,uk&appid=e9eae461e99aa01a4e6115e572b2a66f", function(data){
	console.log(data);
})

// // this prevents the form from the default action of the call	
	$("#city-form").submit(function(event){
		event.preventDefault();
		var cityName = $('#city-name').val();
		getWeather(cityName);
	});

// // function to get city name and then display the weather and temp in Kelvin

	function getWeather(city){
		$.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=e9eae461e99aa01a4e6115e572b2a66f", function(data){
				console.log(data);
				$("#desc").html(data.weather[0].description);
				$("#temp").html(data.main.temp);
				$("#humidity").html(data.main.humidity);

})

	}