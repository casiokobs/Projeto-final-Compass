function timer() {
    function startTimer(duration, display) {
        var timer = duration,  seconds;
        setInterval(function () {
            seconds = parseInt(timer);
            seconds = seconds < 10 ? "0" + seconds : seconds;
            var element = document.querySelector(".timer");
            element.innerHTML = seconds
            if (--timer < 0) {
                window.location.assign("http://localhost:3000/")
            }
        }, 1000);
    }
    window.onload = function () {
        var display = startTimer(60, display);
    };
}
export default timer;