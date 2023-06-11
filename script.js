const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd99612a270msh296af93a01b69ffp100355jsnded5de3f7c2f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityname.innerHTML= city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response =>
		{
		console.log(response)
// cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		wind_degrees2.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		  
  
		
		})

		
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>
{
	e.preventDefault()
getWeather(city.value)

})
getWeather("Delhi")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shanghai', options)
	.then(response => response.json())
	.then(response =>
		{
		console.log(response)
		cloud_pctshanghai.innerHTML = response.cloud_pct
	tempshanghai.innerHTML = response.temp
		feels_likeshanghai.innerHTML = response.feels_like
		humidityshanghai.innerHTML = response.humidity
		min_tempshanghai.innerHTML = response.min_temp
		max_tempshanghai.innerHTML = response.max_temp
		wind_speedshanghai.innerHTML = response.wind_speed
		wind_degreesshanghai.innerHTML = response.wind_degrees
		sunriseshanghai.innerHTML = response.sunrise
		sunsetshanghai.innerHTML = response.sunset

		}
		)
		
	.catch(err => console.error(err));
		

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston', options)
	.then(response => response.json())
	.then(response =>
		{
		console.log(response)
		cloud_pctboston.innerHTML = response.cloud_pct
	tempboston.innerHTML = response.temp
		feels_likeboston.innerHTML = response.feels_like
		humidityboston.innerHTML = response.humidity
		min_tempboston.innerHTML = response.min_temp
		max_tempboston.innerHTML = response.max_temp
		wind_speedboston.innerHTML = response.wind_speed
		wind_degreesboston.innerHTML = response.wind_degrees
		sunriseboston.innerHTML = response.sunrise
		sunsetboston.innerHTML = response.sunset

		}
		)
		
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options)
	.then(response => response.json())
	.then(response =>
		{
		console.log(response)
		cloud_pctlucknow.innerHTML = response.cloud_pct
	templucknow.innerHTML = response.temp
		feels_likelucknow.innerHTML = response.feels_like
		humiditylucknow.innerHTML = response.humidity
		min_templucknow.innerHTML = response.min_temp
		max_templucknow.innerHTML = response.max_temp
		wind_speedlucknow.innerHTML = response.wind_speed
		wind_degreeslucknow.innerHTML = response.wind_degrees
		sunriselucknow.innerHTML = response.sunrise
		sunsetlucknow.innerHTML = response.sunset

		}
		)
		
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
	.then(response => response.json())
	.then(response =>
		{
		console.log(response)
		cloud_pctkolkata.innerHTML = response.cloud_pct
	    tempkolkata.innerHTML = response.temp
		feels_likekolkata.innerHTML = response.feels_like
		humiditykolkata.innerHTML = response.humidity
		min_tempkolkata.innerHTML = response.min_temp
		max_tempkolkata.innerHTML = response.max_temp
		wind_speedkolkata.innerHTML = response.wind_speed
		wind_degreeskolkata.innerHTML = response.wind_degrees
		sunrisekolkata.innerHTML = response.sunrise
		sunsetkolkata.innerHTML = response.sunset

		}
		)
		
	.catch(err => console.error(err));
		
		
		