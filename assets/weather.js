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

        // Day One
        var dayOne = data.list[0].dt_txt
        var iconOne = data.list[0].weather[0].icon
        var urlOne = `http://openweathermap.org/img/w/${iconOne}.png`;
        var firstTemp = data.list[0].main.temp
        var firstHumidity = data.list[0].main.humidity
        var firstWind = data.list[0].wind.speed
        document.getElementById('windOne').innerHTML = `Wind: ${firstWind} MPH`
        document.getElementById('humidityOne').innerHTML = `Humidity: ${firstHumidity} %`
        document.getElementById('tempOne').innerHTML = `Temp: ${firstTemp} F`
        document.getElementById('firstIcon').src=urlOne
        document.getElementById('dateOne').innerHTML = dayOne

        // Day Two
        var dayTwo = data.list[8].dt_txt
        var iconTwo = data.list[8].weather[0].icon
        var urlTwo = `http://openweathermap.org/img/w/${iconTwo}.png`;
        var secondTemp = data.list[8].main.temp
        var secondHumidity = data.list[8].main.humidity
        var secondWind = data.list[8].wind.speed
        document.getElementById('windTwo').innerHTML = `Wind: ${secondWind} MPH`
        document.getElementById('humidityTwo').innerHTML = `Humidity: ${secondHumidity} %`
        document.getElementById('tempTwo').innerHTML = `Temp: ${secondTemp} F`
        document.getElementById('secondIcon').src=urlTwo
        document.getElementById('dateTwo').innerHTML = dayTwo       

        // Day Three
        var dayThree = data.list[16].dt_txt
        var iconThree = data.list[16].weather[0].icon
        var urlThree = `http://openweathermap.org/img/w/${iconThree}.png`;
        var thirdTemp = data.list[16].main.temp
        var thirdHumidity = data.list[16].main.humidity
        var thirdhWind = data.list[16].wind.speed
        document.getElementById('windThree').innerHTML = `Wind: ${thirdhWind} MPH`
        document.getElementById('humidityThree').innerHTML = `Humidity: ${thirdHumidity} %`
        document.getElementById('tempThree').innerHTML = `Temp: ${thirdTemp} F`
        document.getElementById('thirdIcon').src=urlThree
        document.getElementById('dateThree').innerHTML = dayThree

        // Day Four
        var dayFour = data.list[24].dt_txt
        var iconFour = data.list[24].weather[0].icon
        var urlFour = `http://openweathermap.org/img/w/${iconFour}.png`;
        var fourthTemp = data.list[24].main.temp
        var fourthHumidity = data.list[24].main.humidity
        var fourthWind = data.list[24].wind.speed
        document.getElementById('windFour').innerHTML = `Wind: ${fourthWind} MPH`
        document.getElementById('humidityFour').innerHTML = `Humidity: ${fourthHumidity} %`
        document.getElementById('tempFour').innerHTML = `Temp: ${fourthTemp} F`
        document.getElementById('fourthIcon').src=urlFour
        document.getElementById('dateFour').innerHTML = dayFour

        // Day Fifth
        var dayFive = data.list[32].dt_txt
        var iconFive = data.list[32].weather[0].icon
        var urlFive = `http://openweathermap.org/img/w/${iconFive}.png`;
        var fifthTemp = data.list[32].main.temp
        var fifthHumidity = data.list[32].main.humidity
        var fifthWind = data.list[32].wind.speed
        document.getElementById('windFive').innerHTML = `Wind: ${fifthWind} MPH`
        document.getElementById('humidityFive').innerHTML = `Humidity: ${fifthHumidity} %`
        document.getElementById('tempFive').innerHTML = `Temp: ${fifthTemp} F`
        document.getElementById('fifthIcon').src=urlFive
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

