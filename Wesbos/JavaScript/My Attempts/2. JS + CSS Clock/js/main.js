window.onload = function() {
    var d = document;
    var hands = d.getElementsByClassName("hand");
    var clock = d.getElementById("digital");

    /*
      Formulas:
       - Sec: ((Seconds / 60) * 360) + 90
       - Min: ((Min / 60) * 360) + ((Seconds / 60) * 6) + 90
       - Hour: ((Hour / 12) * 360) + ((Min / 60) * 30) + 90
    */

    var update = function() {
        let time = new Date();
        let t = {
            sec: time.getSeconds(),
            min: time.getMinutes(),
            hour: time.getHours()
        }

        let tempHour = t.hour, amOrPm;
        let tempMin = t.min;
        let tempSec = t.sec;
        
        if (tempHour > 12) {
            tempHour -= 12,
            amOrPm = 'PM'
        } else amOrPm = "AM";

        if (t.min < 10) {
            tempMin = "0" + t.min
        } else tempMin = t.min;

        if (tempSec < 10) {
            tempSec = "0" + t.sec;
        } else tempSec = t.sec;

        hands[2].style.transform = `rotateZ(${((t.sec / 60) * 360) + 90}deg)`;
        hands[0].style.transform = `rotateZ(${((t.min / 60) * 360) + ((t.sec / 60) * 6) + 90}deg)`;
        hands[1].style.transform = `rotateZ(${((t.hour / 12) * 360) + ((t.min / 60) * 30) + 90}deg)`;

        digital.innerHTML = `<span id="hour">${tempHour}</span>:<span id="min">${tempMin}</span>:<span id="sec">${tempSec}</span> ${amOrPm}`;
    }

    setInterval(update, 1);
};