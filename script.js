const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '78d453d0d2msh7926c59c59e2454p167bfcjsn4adbae0bc3d8',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) =>{

    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp 
        temp2.innerHTML = response.temp
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed

    })
    .catch(err => console.error(err));
}


submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Asansol")