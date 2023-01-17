// Accessing element by selecting the id and assigning on variables
var startButton = document.querySelector("#start");
var timerElement = document.querySelector("#time");
var questionTitle = document.querySelector("#question-title");
var choicesDiv = document.querySelector("#choices");
var finalScore = document.querySelector("#final-score");
var feedbackDiv = document.querySelector("#feedback");
var userInitials = document.querySelector("#initials");
var submitScore = document.querySelector("#submit");

//variables
var timer;
var timerCount;
var questionId = 0;
var totalQuestions = questions.length;
var currentScore = 0;
var selected = false;
//Assigning audio link to variables
var correctSound = new Audio("assets/sfx/correct.wav");
var incorrectSound = new Audio("assets/sfx/incorrect.wav");
// Array where the localstorage records details will be stored
var HighScoresRecord = [];

// Create buttons for 4 options
var option1 = document.createElement("button");
var option2 = document.createElement("button");
var option3 = document.createElement("button");
var option4 = document.createElement("button");

// Append button
choicesDiv.appendChild(option1);
choicesDiv.appendChild(option2);
choicesDiv.appendChild(option3);
choicesDiv.appendChild(option4);

//Creating p element and assigning to variable
var feedback = document.createElement("p");
feedbackDiv.appendChild(feedback);

// The startGame function is called when the start button is clicked
function startGame() {
    timerCount = 100;
    startTimer();
    displayQuiz();
}

// The setTimer function starts the timer and triggers an alert and display end screen when timer runs out
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      //If times has run out stop timer and alert player
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        alert("You have run out of time");
        displayEndScreen();
      }
    }, 1000);
}

// The DisplayQuiz function is called on startGame function and will be called when the Start Quiz button is clicked
function displayQuiz() {
    document.getElementById("start-screen").classList.add('hide');
    document.getElementById("questions").classList.remove('hide');
    
    displayQuestion();

    // Show selection for op1
    option1.addEventListener("click", function() {
        selected = option1.value;
        //Add 1 on questionID to go to next question (index)
        questionId++;
        evaluateAnswer()
        displayQuestion();
    })
  
    // Show selection for op2
    option2.addEventListener("click", function() {
        selected = option2.value;
        questionId++;
        evaluateAnswer()
        displayQuestion();
    })
  
    // Show selection for op3
    option3.addEventListener("click", function() {
        selected = option3.value;
        questionId++;
        evaluateAnswer()
        displayQuestion();
    })
  
    // Show selection for op4
    option4.addEventListener("click", function() {
        selected = option4.value;
        questionId++;
        evaluateAnswer()
        displayQuestion();
    })

}

//function that will display questions depending on the questionID
function displayQuestion(){
    if (questionId < totalQuestions) {
        questionTitle.textContent = questions[questionId].question;
        option1.textContent = "1. " + questions[questionId].options[0].text;
        option2.textContent = "2. " + questions[questionId].options[1].text;
        option3.textContent = "3. " + questions[questionId].options[2].text;
        option4.textContent = "4. " + questions[questionId].options[3].text;
        
        // Providing the true or false value to the options
        option1.value = questions[questionId].options[0].isCorrect;
        option2.value = questions[questionId].options[1].isCorrect;
        option3.value = questions[questionId].options[2].isCorrect;
        option4.value = questions[questionId].options[3].isCorrect;
    }
    //If questionId is equal to totalQuestions then stop timer
    else{
        // Clears interval and stops timer then display end screen
        clearInterval(timer);
        displayEndScreen();
    }
}

//Function to check if the answer is correct and display on feedback
function evaluateAnswer(){
    document.getElementById("feedback").classList.remove('hide');
    //If answer is correct, play correct sound; add 1 to current score and display "Correct" on feedback
    if (selected === "true"){
        correctSound.play();
        currentScore++;
        feedback.textContent = "Correct!";
        //Method to only show feedbacks for 3 seconds
        setTimeout(function(){
            document.getElementById("feedback").classList.add('hide');
        }, 3000);
    }
    //If answer is incorrect, play incorrect sound; deduct 10 seconds to timer and display "Wrong" on feedback
    else{
        incorrectSound.play();
        timerCount = timerCount - 10;
        feedback.textContent = "Wrong!";
        //Method to only show feedbacks for 3 seconds
        setTimeout(function(){
            document.getElementById("feedback").classList.add('hide');
        }, 3000);
    }
}

//Function to show end screen
function displayEndScreen(){
    document.getElementById("questions").classList.add('hide');
    document.getElementById("feedback").classList.add('hide');
    document.getElementById("end-screen").classList.remove('hide');
    //set finalscore to current score of player
    finalScore.textContent = currentScore;
}

//Function to record score in local storage
function recordScore(){
    //If there is a records detail in local storage then assign that to HighScoresRecord array
    if (localStorage.getItem("records") !== null) {
        HighScoresRecord = JSON.parse(localStorage.getItem("records"));
    }
    //Pushing new scores details to HighScoresRecord array to store before setting it to local storage
    HighScoresRecord.push([userInitials.value, currentScore]);
    //Set the records in local sotrage to HighScoresRecord array
    localStorage.setItem('records', JSON.stringify(HighScoresRecord));
    //Change location to highscores.html 
    location.href = "highscores.html";
}

// Attach event listener to Submit button to call recordScore function on click
submitScore.addEventListener("click", recordScore);

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);