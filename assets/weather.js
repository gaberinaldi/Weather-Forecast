var cityname;
var apiKey = "d5b8c2268b885aedb32b68ca6944722d";
var date = new Date();
        var year = date.getFullYear()
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var formattedDate = `(${month}/${day}/${year})`

document.getElementById('citySearch').addEventListener('click', function() {
    var cityname = document.getElementById('cityInput').value;
    latAndLong(cityname);
});


function latAndLong (cityname) {

    var latURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=${apiKey}`;
    fetch (latURL)
    .then (function(res) {
        return res.json();
    })
    .then (function(data) {
        console.log(data)
        fiveDayForecast(data[0].lat, data[0].lon)
        currentWeather(cityname)

    })
}

function fiveDayForecast (lat,lon) {

    var fiveDaysURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    fetch (fiveDaysURL)
    .then (function(res) {
        return res.json();
    })
    .then (function(data) {
        console.log(data)
        var dayOne = data.list[0].dt_txt
        document.getElementById('dateOne').innerHTML = dayOne
        var dayTwo = data.list[8].dt_txt
        document.getElementById('dateTwo').innerHTML = dayTwo
        var dayThree = data.list[16].dt_txt
        document.getElementById('dateThree').innerHTML = dayThree
        var dayFour = data.list[24].dt_txt
        document.getElementById('dateFour').innerHTML = dayFour
        var dayFive = data.list[8].dt_txt
        document.getElementById('dateFive').innerHTML = dayFive
    })
}

function currentWeather (cityname) {

    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&appid=d5b8c2268b885aedb32b68ca6944722d`;
    fetch (queryURL)
    .then (function(res) {
        return res.json();
    })
    .then (function(data) {
        console.log(data)
        var imageLog = data.weather[0].icon
        var iconURL = `http://openweathermap.org/img/w/${imageLog}.png`;
        document.getElementById('weatherIcon').src=iconURL
        var currentCity = data.name
        document.getElementById('city').innerHTML = currentCity
        var currentTemp = data.main.temp 
        document.getElementById('temp').innerHTML = `Temp: ${currentTemp} F`
        var currentHumid = data.main.humidity
        document.getElementById('humidity').innerHTML = `Humidity: ${currentHumid} %`
        var currentWind = data.wind.speed
        document.getElementById('wind').innerHTML = `Wind: ${currentWind} MPH`
        document.getElementById('date').innerHTML = formattedDate

    })
}