function displayTime() {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let per = document.getElementById("per");


    hrs > 12 ? (per.innerHTML = "pm") : (per.innerHTML = "am");

    if (hrs > 12){
        hrs = hrs - 12;
    }
    if (hrs < 10){
        hrs = '0' + hrs;
    }

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    document.getElementById("hour").innerHTML = hrs;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
}

setInterval(displayTime, 10);