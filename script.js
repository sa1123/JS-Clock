function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    hour = addLeadingZero(hour);
    var min = date.getMinutes();
    min = addLeadingZero(min);
    var sec = date.getSeconds();
    sec = addLeadingZero(sec);

    document.getElementById("clock-time").innerHTML = hour + " : " + min + " : " + sec;
    var t = setTimeout(function(){ currentTime() }, 1000);
}

function addLeadingZero(t) {
    if(t<10){
        return "0" + t;
    } else {
        return t;
    }
}

currentTime();