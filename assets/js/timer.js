function timer() {
    var beginTime = "2022-12-23 00:00:00";  
    var start_time = Date.parse(beginTime)
    var t = parseInt(Date.now()- start_time);
    var h = ~~(t / 1000 / 60 / 60 % 24);
    if (h < 10) {
        h = "0" + h;
    }
    var m = ~~(t / 1000 / 60 % 60);
    if (m < 10) {
        m = "0" + m;
    }

    var s = ~~(t / 1000 % 60);
    if (s < 10) {
        s = "0" + s;
    }
    document.getElementById('d').innerHTML = ~~(t / 1000 / 60 / 60 / 24);
    document.getElementById('h').innerHTML = h;
    document.getElementById('m').innerHTML = m;
    document.getElementById('s').innerHTML = s;
}
timer();
setInterval(timer, 1000);