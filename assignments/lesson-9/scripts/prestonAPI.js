var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=48.83&lon=-115.83&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
weatherRequest.onload = function () {
    
    var data = JSON.parse(weatherRequest.responseText);

       
        var temp = data.main.temp;
        var humid = data.main.humidity;
        function rain(precip){
            if (precip == undefined) {
                precip = 0;
            } else {
                precip = data.rain['3h'];
            }
            return precip;
        }
        var precip = rain();
        var wind = data.wind.speed;
        document.getElementById('curTemp').innerHTML = temp + "&deg;F";
        document.getElementById('humidity').innerHTML = humid + "&#37;";
        document.getElementById('precipitation').innerHTML = precip + " inches";
        document.getElementById('wind').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChill').innerHTML = chill;



};

weatherRequest.send();