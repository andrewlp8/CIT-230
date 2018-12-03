var t = 76;
var s = 5;
var f = 35.74 + 0.6215 * t -35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

var chill = parseFloat(f).toFixed(2);
document.getElementById('windChill').innerHTML = chill;