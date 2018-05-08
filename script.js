// the IDs of the elements that we gonna deal with
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {

    // get the current hour, minute, and sec
    var date = new Date();

    let hr = date.getHours();
    let min =  date.getMinutes();
    let sec = date.getSeconds();

// contain the degrees we want to turn each of the arm
// to match the hours arm with the minutes arm
    let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
// to match the minutes arm with the seconds arm
    let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
    let secPosition = sec * 360 / 60;

    // apply these numbers as degrees in transform style for each element
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

// call the function every thousand milliseconds, which is 1 sec
var interval = setInterval(runTheClock, 1000);