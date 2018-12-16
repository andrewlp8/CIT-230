

var myRequest = new XMLHttpRequest();
myRequest.open('GET', '\directory/temples.json');



myRequest.onload = function () {
    var data = JSON.parse(myRequest.responseText);

    copenhagenTitle(data);
    showCopenhagenClosures(data);
    SAfricaTitle(data);
    showSAfricaClosures(data);
    LVNevadaTitle(data);
    showLVNevadaClosures(data);
    portlandTitle(data);
    showPortlandClosures(data);

    // CopenHagen
    function copenhagenTitle(jsonObj) {
        var myh2 = document.createElement('h2');
        myh2.textContent = jsonObj.temple[0].name;
        document.getElementById('temple1Title').appendChild(myh2);
    }

    function showCopenhagenClosures(jsonObj) {
        var closureDate = jsonObj.temple[0].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('copenhagenClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }

    // South Africa
    function SAfricaTitle(jsonObj) {
        var myh2 = document.createElement('h2');
        myh2.textContent = jsonObj.temple[1].name;
        document.getElementById('temple2Title').appendChild(myh2);
    }

    function showSAfricaClosures(jsonObj) {
        var closureDate = jsonObj.temple[1].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('sAfricaClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }

    // Las Vegas
    function LVNevadaTitle(jsonObj) {
        var myh2 = document.createElement('h2');
        myh2.textContent = jsonObj.temple[2].name;
        document.getElementById('temple3Title').appendChild(myh2);
    }

    function showLVNevadaClosures(jsonObj) {
        var closureDate = jsonObj.temple[3].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('lvNevadaClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }

    // Portland
    function portlandTitle(jsonObj) {
        var myh2 = document.createElement('h2');
        myh2.textContent = jsonObj.temple[3].name;
        document.getElementById('temple4Title').appendChild(myh2);
    }

    function showPortlandClosures(jsonObj) {
        var closureDate = jsonObj.temple[3].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('portlandClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }
}

myRequest.send();