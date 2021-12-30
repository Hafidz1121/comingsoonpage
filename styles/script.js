var countDownDate = new Date("Jan 14, 2022 00:00:00").getTime();
var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 *24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML = days + "h " + hours + "j " + minutes + "m " + seconds + "d ";;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Happy Birthday Ke- 18 Tahun :)";
    }
}, 1000);