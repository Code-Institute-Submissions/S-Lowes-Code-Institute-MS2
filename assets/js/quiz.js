// quiz.js
// Create variables
let score = 0;
let categoryData = 0;
let randomQuestionNumber = 0;
let randomNumberArray = [];

const startQuiz = document.getElementById("startQuiz");

// For CSS style adjustments.

let quizHost = document.querySelector('.quizHost');
let startQ = document.querySelector('#startQuiz');
let userAnswerSubmission = document.querySelector('.userAnswerSubmission');

// Choose a Category
/*
Using the id taken from the clicked button we can grab the required category from jService using fetch.
The function will 'await' the completion of the fetch command before presenting the button that starts the quiz (UI change).
We also change the facial expression of the quiz host.
*/
// Fetch taken from "https://developers.google.com/web/updates/2015/03/introduction-to-fetch"
async function category(elem) {

  let cat = (elem.id);

  await fetch('https://jservice.io/api/category?id=' + cat)
    .then(
      function(response) {
        if (response.status !== 200) {
          alert('Oh no! Looks like there was an error.');
          return;
        }

        response.json().then(function(data) {
          categoryData = data;
        });
      }
    )
    .catch(function(err) {
      alert('Oh dear! Seems we had a problem finding the category.', err);
    });

  document.getElementById("hostSpeech").innerHTML =
    "When ready, press the button & I'll ask you a question";

  quizHost.style.backgroundImage =
    'url("assets/images/quizHost/alien_happy2.png")';

  let categoryChoice = document.querySelector('.categoryChoice');
  categoryChoice.style.display = 'none';

  startQ.style.display = 'inline-block';
}


//Start The Quiz/Next Question
/*
Grabbing a RANDOM Question using a random number.
Create random number & check it is unused - We don't want repeat questions.
Unused numbers are pushed to the array which we check our new random numbers against.
We also do another expression change for our quiz host aswell as changing the UI.
*/
startQuiz.addEventListener('click', function() {

  startQ.style.display = 'none';

  userAnswerSubmission.style.display = 'inline-block';

  quizHost.style.backgroundImage =
    'url("assets/images/quizHost/alien_question1.png")';


  const numberOfQuestions = categoryData.clues_count;
  var min;
  var max;
  min = Math.ceil(0);
  max = Math.floor(numberOfQuestions);
  randomQuestionNumber = 29;
  //Math.floor(Math.random() * (max - min + 1) + min);

  function invalidQuestion(rq){
      let q_temp=categoryData.clues[rq].question.split(" ").join("");
      let a_temp=categoryData.clues[rq].answer.split(" ").join("");

      let q_valid = (Boolean(q_temp) == false);
      let a_valid = (Boolean(a_temp) == false);
      let n_valid = randomNumberArray.includes(rq);
      let valid = n_valid || q_valid || a_valid;
      return(valid);
  }

  while(invalidQuestion(randomQuestionNumber)) {
    randomQuestionNumber = Math.floor(Math.random() * (max - min + 1) +
    min);
  }

  randomNumberArray.push(randomQuestionNumber);

  const question = categoryData.clues[randomQuestionNumber].question;
  const answer = categoryData.clues[randomQuestionNumber].answer;

  document.getElementById("answer").innerHTML = answer;
  document.getElementById("question").innerHTML = question;
  document.getElementById("hostSpeech").innerHTML = question;
});

//Using enter key to submit answer on form & suppress default event

let input = document.getElementById("userAnswer");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    checkAnswer();
  }
});

document.getElementById('answerForm').onsubmit = function(e) {
  e.preventDefault();
  checkAnswer();
};

// Checking the Answer
/*
We check the users answer using the string-similarity api.
the string similarity finds the degree of similarity between two strings, based on Dice's Coefficient.
It Returns a fraction between 0 and 1 which indicates the degree of similarity between the two strings
We accept the answer as long as it is at least 60% accurate.
In this function we also ensure the strings passed to the api are lowercase.
*/
function checkAnswer() {
  const title = categoryData.title;

  let ans = document.getElementById("answer").innerHTML;
  let userAns = document.getElementById("userAnswer").value;

  let ansLower = ans.toLowerCase();
  let userAnsLower = userAns.toLowerCase();
  
  if (stringSimilarity.compareTwoStrings(ansLower, userAnsLower) >= 0.6) {
    score++;
    document.getElementById("hostSpeech").innerHTML =
      "Well Done! You got it correct.";

    quizHost.style.backgroundImage =
      'url("assets/images/quizHost/alien_happy3.png")';

    userAnswerSubmission.style.display = 'none';

    startQ.style.display = 'initial';
    document.getElementById('startQuiz').innerHTML = 'Next Question';
  } else {
    document.getElementById("hostSpeech").innerHTML =
      "Oh no! Better luck next time. The answer I was looking for was: " + ans;

    userAnswerSubmission.style.display = 'none';
    let popUp = document.querySelector('.popUp');
    popUp.style.display = 'inline-block';
    popUp.querySelector('.popUpCategory').innerHTML = 'You chose the ' + title +
      ' category';
      
      if (score == 1) {
          popUp.querySelector('.popUpScore').innerHTML = 'You got ' + score +
              ' question correct!';
      } else {
          popUp.querySelector('.popUpScore').innerHTML = 'You got ' + score +
              ' questions correct!';
      }

    quizHost.style.backgroundImage =
      'url("assets/images/quizHost/alien_sad1.png")';
  }
  document.getElementById("answerForm")
.reset(); //reset the form for next question
}


//Restart game
function reloadGame() {
  window.location.reload();
}

let restartGame = function restartGame() {
  reloadGame();
};