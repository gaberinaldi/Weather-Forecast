var cityname;
var apiKey = "d5b8c2268b885aedb32b68ca6944722d";
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=d5b8c2268b885aedb32b68ca6944722d`;

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

    })
}

function fiveDayForecast (lat,lon) {

    var fiveDaysURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch (fiveDaysURL)
    .then (function(res) {
        return res.json();
    })
    .then (function(data) {
        console.log(data)
    })

}