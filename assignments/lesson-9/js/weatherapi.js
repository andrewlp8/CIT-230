// var city = document.getElementById('city');
// Pull mission data from missions.json file here
// AJAX Example
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=48.83&lon=-115.83&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
weatherRequest.onload = function () {
    
    var data = JSON.parse(weatherRequest.responseText);

       
        var temp = data.main.temp;
        console.log(data);
        document.getElementById('current-temp').innerHTML = temp;

};

weatherRequest.send();