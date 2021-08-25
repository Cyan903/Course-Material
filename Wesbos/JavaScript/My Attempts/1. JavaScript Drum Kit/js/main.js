console.clear();

window.onload = function() {
    var d = document;
    var key = d.getElementsByClassName("drum");

    var animate = function(n) {
        n.classList.add("active");
        setTimeout(() => n.classList.remove("active"), 100);
    }

    window.onkeydown = function(e) {
        //alert(e.which);
        switch(e.which) {
            case 65:
                new Audio("/res/sounds/clap.wav").play();
                animate(key[0]);
                break;
            case 83:
                new Audio("../res/sounds/hihat.wav").play();
                animate(key[1]);
                break;
            case 68:
                new Audio("/res/sounds/kick.wav").play();
                animate(key[2]);
                break;
            case 70:
                new Audio("/res/sounds/openhat.wav").play();
                animate(key[3]);
                break;
            case 71:
                new Audio("/res/sounds/boom.wav").play();
                animate(key[4]);
                break;
            case 72:
                new Audio("/res/sounds/ride.wav").play();
                animate(key[5]);
                break;
            case 74:
                new Audio("/res/sounds/snare.wav").play();
                animate(key[6]);
                break;
            case 75:
                new Audio("/res/sounds/tom.wav").play()
                animate(key[7]);
                break;
            case 76:
                new Audio("/res/sounds/tink.wav").play();
                animate(key[8]);
                break;
        };
    };


};