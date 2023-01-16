var highScores = document.querySelector("#highscores");
var clearButton = document.querySelector("#clear");

var scoresList1 = document.createElement("li");
var scoresList2 = document.createElement("li");

highScores.appendChild(scoresList1);
highScores.appendChild(scoresList2);

var storedScore = localStorage.getItem("Score");
var storedPlayer = localStorage.getItem("Player");

scoresList1.textContent = storedPlayer + " - " + storedScore;
scoresList2.textContent = storedPlayer + " - " + storedScore;

function clearAllScores() {
    localStorage.removeItem("Score");
    localStorage.removeItem("Player");
}

clearButton.addEventListener("click", clearAllScores);