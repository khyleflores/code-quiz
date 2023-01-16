//Pseudocode

//Variables
//startButton YES
//timerElement YES
//currentScore
//viewscores
//questionsinObjectarray YES
//finalScore
//feedBack

//When start button is click, timer is activated - YES
//For loop for 10 questions in object array
//show feedback if it is correct or wrong
//if wrong deduct 10 seconds on timer else continue
//add points every correct answer in variable current score
//Show final score and asked to enter initials with submit button
//Once submit, go to highscores.html

//When View Highscores is clicked, go to highscores.html


var startButton = document.querySelector("#start");
var timerElement = document.querySelector("#time");
var questionTitle = document.querySelector("#question-title");
var choicesDiv = document.querySelector("#choices");
var finalScore = document.querySelector("#final-score");
var feedbackDiv = document.querySelector("#feedback");

var timer;
var timerCount;
var questionId = 0;
var totalQuestions = questions.length;
var currentScore = 0;
var selected = false;
var correctSound = new Audio("assets/sfx/correct.wav");
var incorrectSound = new Audio("assets/sfx/incorrect.wav");

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

var feedback = document.createElement("p");
feedbackDiv.appendChild(feedback);


function startGame() {
    timerCount = 100;
    startTimer();
    displayQuiz();
}


function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      //If times has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        alert("You have run out of time");
        displayEndScreen();
      }
    }, 1000);
  }

  function displayQuiz() {
    document.getElementById("start-screen").classList.add('hide');
    document.getElementById("questions").classList.remove('hide');
    
    displayQuestion();

    // Show selection for op1
    option1.addEventListener("click", function() {
        selected = option1.value;
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
    else{
        // Clears interval and stops timer
        clearInterval(timer);
        displayEndScreen();
    }
}

function evaluateAnswer(){
    document.getElementById("feedback").classList.remove('hide');
    if (selected === "true"){
        correctSound.play();
        currentScore++;
        feedback.textContent = "Correct!";

        setTimeout(function(){
            document.getElementById("feedback").classList.add('hide');
        }, 3000);
    }
    else{
        incorrectSound.play();
        timerCount = timerCount - 5;
        feedback.textContent = "Wrong!";

        setTimeout(function(){
            document.getElementById("feedback").classList.add('hide');
        }, 3000);
    }

    console.log(currentScore);
}

function displayEndScreen(){
    document.getElementById("questions").classList.add('hide');
    document.getElementById("feedback").classList.add('hide');
    document.getElementById("end-screen").classList.remove('hide');

    finalScore.textContent = currentScore;

}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);