
    var day = new Date();

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var wkDay = weekday[day.getDay()];

    var dd = day.getDate();

    var year = day.getFullYear();

    var mnth = new Array(12);
    mnth[0] = "January";
    mnth[1] = "February";
    mnth[2] = "March";
    mnth[3] = "April";
    mnth[4] = "May";
    mnth[5] = "June";
    mnth[6] = "July";
    mnth[7] = "August";
    mnth[8] = "September";
    mnth[9] = "October";
    mnth[10] = "November";
    mnth[11] = "December";
    var month = mnth[day.getMonth()];

    document.getElementById("currentDateOutput").innerHTML = wkDay + ", " + dd + " " + month + " " + year;
