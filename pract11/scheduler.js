// Export function
export function startTimer(seconds, callback) {

    let time = seconds;

    let timer = setInterval(function() {

        let minutes = Math.floor(time / 60);
        let remainingSeconds = time % 60;

        callback(minutes, remainingSeconds);

        if (time <= 0) {
            clearInterval(timer);
            alert("Time is over!");
        }

        time--;

    }, 1000);

    return timer;
}
