
// Declare variables.
let score = 0,
  categoryData = 0,
  randomQuestionNumber = 0,
  randomNumberArray = [];

// For CSS style adjustments.
let quizHost = document.querySelector('.quizHost'),
  startQ = document.querySelector('#startQuiz'),
  userAnswerSubmission = document.querySelector('.userAnswerSubmission');

// For start quiz event listener.
const startQuiz = document.getElementById("startQuiz");


// Choose a Category
/*
The function will fetch the chosen cateory from jService API.
It will also adjust some CSS to change the UI.
*/
// fetch taken from "https://developers.google.com/web/updates/2015/03/introduction-to-fetch"
// async taken from "https://developers.google.com/web/fundamentals/primers/async-functions"
async function fetchCategory(elem) {

  let cat = (elem.id);

  try {
    const response = await fetch('https://jservice.io/api/category?id=' +
      cat);
    categoryData = await response.json();
  } catch (err) {
    alert('Oh dear! Seems we had a problem finding the category.', err);
  }


  document.getElementById("hostSpeech").innerHTML =
    "When ready, press the button & I'll ask you a question";

  quizHost.style.backgroundImage =
    'url("assets/images/quizHost/alien_happy2.png")';

  let categoryChoice = document.querySelector('.categoryChoice');
  categoryChoice.style.display = 'none';

  startQ.style.display = 'inline-block';
  return categoryData;
}


//Start The Quiz/Next Question
/*
The function will Grab a random question using a random number.
Used question numbers are stored in an array.
More adjustments to CSS are made to change the UI.

Inside the eventlistener are functions isQuizDisrupted & isQuestionInvalid.
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
  randomQuestionNumber = Math.floor(Math.random() * (max - min + 1) + min);


  // isQuizDisrupted: Checks question length does not disrupt the UI.
  function isQuizDisrupted() {
    let sW = screen.width;
    if (sW <= 600) {
      return (categoryData.clues[randomQuestionNumber].question.length >
        200);
    } else if (sW <= 900 || sW <= 1450) {
      return (categoryData.clues[randomQuestionNumber].question.length >
        280);
    } else {
      return (categoryData.clues[randomQuestionNumber].question.length >
        440);
    }
  }


  //isQuestionInvalid: Checks question & answer are unused and are not falsy.
  function isQuestionInvalid(rqn) {
    let qTemp = categoryData.clues[rqn].question.split(" ").join(""),
      aTemp = categoryData.clues[rqn].answer.split(" ").join("");

    let qValid = (Boolean(qTemp) == false),
      aValid = (Boolean(aTemp) == false),
      nValid = randomNumberArray.includes(rqn);

    let valid = nValid || qValid || aValid;
    return (valid);
  }

  while (isQuestionInvalid(randomQuestionNumber) || isQuizDisrupted()) {
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
Uses the string-similarity API to check the answer.
API Returns a fraction between 0 and 1 which indicates the similarity.
Answers are accepted as long as they are at least 60% accurate.
This function also ensures the strings passed to the api is lowercase.
CSS adjusted to change the UI and present users results.
*/
function checkAnswer() {
  const title = categoryData.title;

  let ans = document.getElementById("answer").innerHTML,
    userAns = document.getElementById("userAnswer").value;

  let ansLower = ans.toLowerCase(),
    userAnsLower = userAns.toLowerCase();

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