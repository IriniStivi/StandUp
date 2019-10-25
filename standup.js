function go() {
    new Audio('glass_ping-Go445-1207030150.mp3').play();

    function startTimer() {

        var text = document.getElementById("button").innerHTML;

        if (text === "Stand up!") {
            document.getElementById("button").innerHTML = "Sit down.";
            new Audio('descending_craft-Sonidor-991848481.mp3').play();
        } else {
            document.getElementById("button").innerHTML = "Stand up!";
            new Audio('UFO_Takeoff-Sonidor-1604321570.mp3').play();
        }
    }
    setInterval(startTimer, 600000);
}