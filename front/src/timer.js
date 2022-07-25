import removeToken from  "./removeToken";

function timer() {
    function startTimer(duration) {
        var timer = duration,  seconds;
        setInterval(function () {
            seconds = parseInt(timer);
            seconds = seconds < 10 ? "0" + seconds : seconds;
            var element = document.querySelector(".timer");
            element.innerHTML = seconds;
            if (--timer < 0) {
                removeToken();
            }
        }, 1000);
    }
    window.onload = function () {
        var display = startTimer(600, display);
    };
}
export default timer;