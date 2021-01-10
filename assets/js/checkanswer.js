function checkAnswer() {
    console.log("hello"); //checking that function is called
    // send `submit` request to server
    console.log(document.getElementById("answer").innerHTML);
    console.log(document.getElementById("userAnswer").value);
    console.log(stringSimilarity.compareTwoStrings(document.getElementById("answer").innerHTML, document.getElementById("userAnswer").value));
}