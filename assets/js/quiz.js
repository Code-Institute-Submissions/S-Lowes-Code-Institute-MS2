// quiz.js
// Create variables

let score = 0;
let cat = 0;
let categoryData=0;

const catA = document.getElementById("catA");
const catB = document.getElementById("catB");
const catC = document.getElementById("catC");
const catD = document.getElementById("catD");
const CatE = document.getElementById("catE");
const catF = document.getElementById("catF");
const startQuiz = document.getElementById("startQuiz");

// Choose a Category - Grab Category from jService

function category(a,b) { //Fetch taken from "https://developers.google.com/web/updates/2015/03/introduction-to-fetch"
    console.log(a);
    cat=b;
    console.log(cat);

    var c = cat.toString(); //We use this with the jService address to access that particular category.

    fetch('https://jservice.io/api/category?id='+c) //Accessing the jService API - https worked, http didn't
    .then(
      function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data)
        categoryData=data;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

// Event listener for category choice

catA.addEventListener('click', () => category("CatA",21));
catB.addEventListener('click', () => category("CatB",114));
catC.addEventListener('click', () => category("CatC",680));
catD.addEventListener('click', () => category("CatD",25));
catE.addEventListener('click', () => category("CatE",42));
catF.addEventListener('click', () => category("CatF",227));

//Finding a Question

startQuiz.addEventListener('click', function(){
    const question = categoryData.clues[1].question;
    const answer = categoryData.clues[1].answer;
    document.getElementById("question").innerHTML = question;
    document.getElementById("answer").innerHTML = answer;
});

// Checking the Answer

function checkAnswer() {
    // send `submit` request to server
    console.log(document.getElementById("answer").innerHTML);
    console.log(document.getElementById("userAnswer").value);
    console.log(stringSimilarity.compareTwoStrings(document.getElementById("answer").innerHTML, document.getElementById("userAnswer").value));
    // ^ check that we are getting the correct values.
    if (stringSimilarity.compareTwoStrings(document.getElementById("answer").innerHTML, document.getElementById("userAnswer").value)>=0.6){
        score++
    }
    console.log(score)
    document.getElementById("userAnswer").value="";
}