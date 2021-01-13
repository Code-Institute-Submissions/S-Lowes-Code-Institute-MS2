let score = 0; //Create variable which we will use to track the score
let cat=0; //Create variable cat, which will be used when fetching the category we want questions from.

//Event listener for category choice

catA.addEventListener('click', function(){
    console.log("CatA")
    let cat=21;
});
catB.addEventListener('click', function(){
    console.log("CatB")
    let cat=114;
});
catC.addEventListener('click', function(){
    console.log("CatC")
    let cat=680;
});
catD.addEventListener('click', function(){
    console.log("CatD")
    let cat=25;
});
catE.addEventListener('click', function(){
    console.log("CatE")
    let cat=42;
});
catF.addEventListener('click', function(){
    console.log("CatF")
    let cat=227;
});

//Checking the Answer

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

//const btnNext = document.getElementById("btnNext"); (Do we need this?)

btnNext.addEventListener('click', function(){ //Fetch taken from "https://developers.google.com/web/updates/2015/03/introduction-to-fetch"
    fetch('https://jservice.io/api/random') //Accessing the jService API - https worked, http didn't
    .then(
      function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        const question = data[0].question; //Using data[0] to go down a level and then ask for the question specifically.
        const answer = data[0].answer;
        //console.log(`${question}: ${answer}`)
        document.getElementById("question").innerHTML = question;
        document.getElementById("answer").innerHTML = answer;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

});