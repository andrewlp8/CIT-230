
// Copenhagen
var copenRequest = new XMLHttpRequest();
copenRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 2618425 + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
copenRequest.onload = function () {

    var data = JSON.parse(copenRequest.responseText);


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
        document.getElementById('curTempCopen').innerHTML = temp + "&deg;F";
        document.getElementById('humidityCopen').innerHTML = humid + "&#37;";
        document.getElementById('precipitationCopen').innerHTML = precip + " inches";
        document.getElementById('windCopen').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChillCopen').innerHTML = chill;

        var wImg = document.getElementById('wImageCopen');

        var myImage = document.createElement('img');


        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('imgDescriptionCopen').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescCopen').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

copenRequest.send();


// Johannesburg
var johanRequest = new XMLHttpRequest();
johanRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 953987 + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
johanRequest.onload = function () {

    var data = JSON.parse(johanRequest.responseText);


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
        document.getElementById('curTempJohan').innerHTML = temp + "&deg;F";
        document.getElementById('humidityJohan').innerHTML = humid + "&#37;";
        document.getElementById('precipitationJohan').innerHTML = precip + " inches";
        document.getElementById('windJohan').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChillJohan').innerHTML = chill;

        var wImg = document.getElementById('wImageJohan');

        var myImage = document.createElement('img');


        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('imgDescriptionJohan').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescJohan').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

johanRequest.send();


// Las Vegas
var vegasRequest = new XMLHttpRequest();
vegasRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 5506956 + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
vegasRequest.onload = function () {

    var data = JSON.parse(vegasRequest.responseText);


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
        document.getElementById('curTempVegas').innerHTML = temp + "&deg;F";
        document.getElementById('humidityVegas').innerHTML = humid + "&#37;";
        document.getElementById('precipitationVegas').innerHTML = precip + " inches";
        document.getElementById('windVegas').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChillVegas').innerHTML = chill;

        var wImg = document.getElementById('wImageVegas');

        var myImage = document.createElement('img');


        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('imgDescriptionVegas').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescVegas').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

vegasRequest.send();


// Portland
var portlandRequest = new XMLHttpRequest();
portlandRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 4979245 + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
portlandRequest.onload = function () {

    var data = JSON.parse(portlandRequest.responseText);


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
        document.getElementById('curTempPort').innerHTML = temp + "&deg;F";
        document.getElementById('humidityPort').innerHTML = humid + "&#37;";
        document.getElementById('precipitationPort').innerHTML = precip + " inches";
        document.getElementById('windPort').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChillPort').innerHTML = chill;

        var wImg = document.getElementById('wImagePort');

        var myImage = document.createElement('img');


        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('imgDescriptionPort').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescPort').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

portlandRequest.send();