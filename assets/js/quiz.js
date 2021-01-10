const btnNext = document.getElementById("btnNext");

btnNext.addEventListener('click', function(){
    fetch('https://jservice.io/api/random') //Fetch taken from "https://developers.google.com/web/updates/2015/03/introduction-to-fetch" - https worked, http didn't
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