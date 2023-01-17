var highScores = document.querySelector("#highscores");
var clearButton = document.querySelector("#clear");

var highScoreRecords = [];

highScoreRecords = JSON.parse(localStorage.getItem("records"));

if (localStorage.getItem("records") !== null) {
for (let i = 0; i < highScoreRecords.length; i++) {
    var li = document.createElement("li");
    var item = highScoreRecords[i][0] + " - " + highScoreRecords[i][1];
    var text = document.createTextNode(item);
    li.appendChild(text);
    document.getElementById("highscores").appendChild(li);
    }
}

function clearAllScores() {
    localStorage.removeItem("records");
    document. location. reload();
}

clearButton.addEventListener("click", clearAllScores);