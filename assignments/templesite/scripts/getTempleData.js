

var myRequest = new XMLHttpRequest();
myRequest.open('GET', '\directory/temples.json');



myRequest.onload = function () {
    var data = JSON.parse(myRequest.responseText);

    showCopenhagenClosures(data);
    showSAfricaClosures(data);
    showLVNevadaClosures(data);
    showPortlandClosures(data);

    // CopenHagen
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