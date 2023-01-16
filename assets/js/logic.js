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

var timer;
var timerCount;
var questionNo = 0;

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


function startGame() {
    timerCount = 100;
    
    startTimer();
    displayQuiz();
    evaluateAnswer();
}


function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      //if (timerCount > 0 & completed all the questions) {
          // Clears interval and stops timer
          //clearInterval(timer);
          //Display End Screen
      //}
      //If times has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        //Display End screen
        alert("You have run out of time");
      }
    }, 1000);
  }

  function displayQuiz() {
    document.getElementById("start-screen").classList.add('hide');
    document.getElementById("questions").classList.remove('hide');
    
    questionTitle.textContent = questions[questionNo].question;
    option1.textContent = "1. " + questions[questionNo].options[0].text;
    option2.textContent = "2. " + questions[questionNo].options[1].text;
    option3.textContent = "3. " + questions[questionNo].options[2].text;
    option4.textContent = "4. " + questions[questionNo].options[3].text;

  }


// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

function evaluateAnswer() {
    // Providing the true or false value to the options
    option1.value = questions[questionNo].options[0].isCorrect;
    option2.value = questions[questionNo].options[1].isCorrect;
    option3.value = questions[questionNo].options[2].isCorrect;
    option4.value = questions[questionNo].options[3].isCorrect;

    var selected = false;
  
    // Show selection for op1
    option1.addEventListener("click", function() {
        selected = option1.value
        nextQuestion();
    })
  
    // Show selection for op2
    option2.addEventListener("click", function() {
        selected = option2.value;
        nextQuestion();
    })
  
    // Show selection for op3
    option3.addEventListener("click", function() {
        selected = option3.value;
        console.log(selected);
        nextQuestion();
    })
  
    // Show selection for op4
    option4.addEventListener("click", function() {
        selected = option4.value;
        nextQuestion();
    })
}

function nextQuestion() {
    questionNo++;
    displayQuiz();
}