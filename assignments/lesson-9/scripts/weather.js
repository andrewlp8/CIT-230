// city variables
var city = document.getElementById('city').innerText;

var cityId = "";

var preston = 5061036;

var sodaSprings = 5678757;

var fishHaven = 5052658;

switch (city){
    case "Preston": 
    cityId = preston;
    break;

    case "Soda Springs":
    cityId = sodaSprings;
    break;

    case "Fish Haven":
    cityId = fishHaven;
    break;
}


// weekly




    
// Daily
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
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

        var wImg = document.getElementById('wImage');

        var myImage = document.createElement('img');

        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);

        document.getElementById('imgDescription').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

weatherRequest.send();