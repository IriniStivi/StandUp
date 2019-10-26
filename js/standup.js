

function hide() {
    var element = document.getElementById("start");
    element.classList.add("hide");
  }

function set() {
    t = parseInt((document.getElementById("duration").value) * 60000);
    console.log("Input: " + t); // to make sure user input got logged
    return t;
}

function start() {
    console.log(t);
    new Audio('../mp3/Bike Horn-SoundBible.com-602544869.mp3').play();

    document.getElementById("display").innerHTML = "Stand up!";
    

    function startTimer() {

        var text = document.getElementById("display").innerHTML;

        if (text === "Stand up!") {
            document.getElementById("display").innerHTML = "Sit down.";
            new Audio('../mp3/descending_craft-Sonidor-991848481.mp3').play();
        } else {
            document.getElementById("display").innerHTML = "Stand up!";
            new Audio('../mp3/UFO_Takeoff-Sonidor-1604321570.mp3').play();
        }
    }
    setInterval(startTimer, t);
}