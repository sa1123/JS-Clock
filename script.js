function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    if(hour<10){
        hour = "0" + hour;
    }
    var min = date.getMinutes();
    if(min<10){
        min = "0" + min;
    }
    var sec = date.getSeconds();
    if(sec<10){
        sec = "0" + sec;
    }
    document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec;
    var t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();