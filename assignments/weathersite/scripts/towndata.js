var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function() {
    var townData = request.response;
    preston(townData);
    sodasprings(townData);
    fishhaven(townData);
}

function preston(jsonObj) {
    var info = jsonObj['towns'];
        
        var myArticle = document.createElement('article');
        var myH3 = document.createElement('h3');
        var myPara0 = document.createElement('p');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');

        myH3.textContent = info[4].name;
        myPara0.textContent = info[4].motto;
        myPara1.textContent = 'Year founded: ' + info[4].yearFounded;
        myPara2.textContent = 'Current Population: ' + info[4].currentPopulation;
        myPara3.textContent = 'Average Rainfall:'  + info[4].averageRainfall;

        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara0);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);

        sectionP.appendChild(myArticle);
}

function sodasprings(jsonObj) {
    var info = jsonObj['towns'];
        
        var myArticle = document.createElement('article');
        var myH3 = document.createElement('h3');
        var myPara0 = document.createElement('p');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');

        myH3.textContent = info[5].name;
        myPara0.textContent = info[5].motto;
        myPara1.textContent = 'Year founded: ' + info[5].yearFounded;
        myPara2.textContent = 'Current Population: ' + info[5].currentPopulation;
        myPara3.textContent = 'Average Rainfall:'  + info[5].averageRainfall;

        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara0);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);

        sectionS.appendChild(myArticle);
}

function fishhaven(jsonObj) {
    var info = jsonObj['towns'];
        
        var myArticle = document.createElement('article');
        var myH3 = document.createElement('h3');
        var myPara0 = document.createElement('p');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');

        myH3.textContent = info[1].name;
        myPara0.textContent = info[1].motto;
        myPara1.textContent = 'Year founded: ' + info[1].yearFounded;
        myPara2.textContent = 'Current Population: ' + info[1].currentPopulation;
        myPara3.textContent = 'Average Rainfall:'  + info[1].averageRainfall;

        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara0);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);

        sectionF.appendChild(myArticle);
}

var sectionP = document.getElementById('sectionP');
var sectionS = document.getElementById('sectionS');
var sectionF = document.getElementById('sectionF');