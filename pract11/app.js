// Import function
import { startTimer } from "./scheduler.js";

let timer;

let display = document.getElementById("timer");

document.getElementById("start").onclick = function() {

    let seconds =
        Number(document.getElementById("time").value);

    if (seconds > 0) {

        clearInterval(timer);

        timer = startTimer(seconds, function(min, sec) {

            display.innerText =
                String(min).padStart(2, "0") + ":" +
                String(sec).padStart(2, "0");

        });

    } else {
        alert("Enter a number greater than zero.");
    }
};

document.getElementById("stop").onclick = function() {
    clearInterval(timer);
};

document.getElementById("reset").onclick = function() {
    clearInterval(timer);
    display.innerText = "00:00";
};
