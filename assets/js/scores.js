// Accessing element by selecting the id
var highScores = document.querySelector("#highscores");
var clearButton = document.querySelector("#clear");
// Array where the localstorage records details will be stored
var highScoreRecords = [];

//Method for getting the record item in local storage and assigning it to highScoreRecords array
highScoreRecords = JSON.parse(localStorage.getItem("records"));

//If there is a record in local storage then create a list elemen depending on the number of items in that array
if (localStorage.getItem("records") !== null) {
for (let i = 0; i < highScoreRecords.length; i++) {
    var li = document.createElement("li");
    //See that there is the symbol "-" in between player's initial and their score
    var item = highScoreRecords[i][0] + " - " + highScoreRecords[i][1];
    var text = document.createTextNode(item);
    li.appendChild(text);
    document.getElementById("highscores").appendChild(li);
    }
}

//Clear the records data in local storage function then reload to show changes
function clearAllScores() {
    localStorage.removeItem("records");
    document. location. reload();
}

//Clear button with clearAllScores function
clearButton.addEventListener("click", clearAllScores);