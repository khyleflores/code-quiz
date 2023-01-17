# Code Quiz

## Description 
This application is a timed coding quiz with multiple-choice questions which would help users prepare for coding assessment as part of interview process. This applicaiton runs in the browser, and features dynamically updated HTML and CSS powered by JavaScript code.

Once the Start button is clicked, it will display question with choices. If the user is correct, they will earn 1 point and if user is incorrect then it will deduct 10 seconds from the clock. The quiz will end if the user answers all questions or if the timer runs out. When the game ends, application will display the user's score and it will ask them for their initials. When they submit this, it will take them to Highscores where all players' scores will be displayed. 

## Installation

N/A

## Usage
To use this application to help users prepare for coding assessment as part of interview process.
Click on this [link](https://khyleflores.github.io/code-quiz/ "Code Quiz") or follow the link below:

https://khyleflores.github.io/code-quiz/

When application loads, it will display the start screen where a brief instruction is displayed. To start using the application, click 'Start Quiz' button. 

![Start screen screenshot](/assets/screenshots/screenshot1.png)

A question will be displayed with multiple choices. The timer will also start the countdown from 100 seconds. Click the correct answer to the question.

![Display Question screenshot](/assets/screenshots/screenshot2.png)

If the user has picked an answer, a feedback will be displayed at the bottom whether it is correct or wrong. This will be displayed for 3 seconds. The next question will also be displayed. Note that if the user's answer is incorrect, 10 seconds will be deducted on the timer. 

![Feedback - correct screenshot](/assets/screenshots/screenshot3.png)

Once the user has answered all the questions, the application will display the end screen. This shows the final score of the user and will let them enter their initials to save their score. The timer will also stop the countdown. 

![End Screen screenshot](/assets/screenshots/screenshot4.png)

When the user click the Submit button, they will be redirected to another page where it shows all the scores. This shows as a list with users initials and their scores. This is also the page that will be displayed if "View Highscores" text on the top left corner of Start screen and Question Screen is clicked. Clear button will clear all the data in the Highscore list. 

![End Screen screenshot](/assets/screenshots/screenshot5.png)

## Credits

JavaScript MCQ With Answers. (n.d.). interviewbit.com. Retrieved January 17 2023, from https://www.interviewbit.com/javascript-mcq/ 

Loading and Playing Sound Files. (n.d.). dobrian.github.io. Retrieved January 16 2023, from https://dobrian.github.io/cmp/topics/sample-recording-and-playback-with-web-audio-api/1.loading-and-playing-sound-files 

Nelson, M (2021). *Storing and retrieving JavaScript objects in localStorage* logRocket.com. https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/

## License

MIT License

Copyright (c) [2023] [KhyleFlores]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
