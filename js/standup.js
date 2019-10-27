

function hide() {
    var element = document.getElementById("start");
    element.classList.add("hide");

    var element = document.getElementById("duration");
    element.classList.add("hide");

    var element = document.getElementById("set-button");
    element.classList.add("hide");
  }

function show() {
    var element = document.getElementById("restart");
    element.classList.add("reveal"); 
}

function set() {
    t = parseInt((document.getElementById("duration").value) * 60000);
    console.log("Input: " + t); // to make sure user input got logged
    return t;
}

function setDur() {
    document.getElementById("display").innerHTML = "Ready to go!";
}

function start() {

    // set "minute" to plural if minutes > 1
    if (t/60000 > 1) {
        post = "s";
    } else {
        post = "";
    }

    document.getElementById("minutes").innerHTML = "You chose a duration of " + (t/60000) + " minute" + post + ".";

    new Audio('../mp3/Bike Horn-SoundBible.com-602544869.mp3').play();

    document.getElementById("display").innerHTML = "Stand up!";
    

    function startTimer() {

        var text = document.getElementById("display").innerHTML;

        if (text === "Stand up!") {
            document.getElementById("display").innerHTML = "Sit down.";
            new Audio('../mp3/descending_craft-Sonidor-991848481.mp3').play();
            document.getElementById("minutes").innerHTML = "Now sit down for " + (t/60000) + " minute" + post + ".";
        } else {
            document.getElementById("display").innerHTML = "Stand up!";
            new Audio('../mp3/UFO_Takeoff-Sonidor-1604321570.mp3').play();
            document.getElementById("minutes").innerHTML = "Stand up for " + (t/60000) + " minute" + post + ".";
        }
    }
    setInterval(startTimer, t);
}