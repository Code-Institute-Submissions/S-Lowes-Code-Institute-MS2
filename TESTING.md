# Testing

The W3C Markup Validator, W3C CSS Validator and JSHint Services were used to validate pages of this project. This ensures there were no syntax errors. I also used formatters for my HTML, CSS & JS.

#### Validators
-   [W3C Markup Validator](https://validator.w3.org/) - [Results](documentation/images/html_valid.png)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - [Results](documentation/images/css_valid.png)
-   [JSHint](https://jshint.com/) - [Results](documentation/images/js_valid.png)

#### Formatters

- [HTML Formatter](https://www.freeformatter.com/html-formatter.html)
- [CSS Formatter](https://www.freeformatter.com/css-beautifier.html)
- [JS Formatter](https://beautifier.io/)

### Testing User Journey
1. Upon entering the site you are presented with the option to choose a category.
- When a button is clicked that category is chosen.
- This correctly prompts the UI, hosts facial expression and hosts speech to change.
- the 'Start Quiz' button is then displayed.

1. Upon clicking a category the host then prompts the user to start the quiz using the 'Start Quiz' button.
- Upon clicking this button a question is asked.
- Much like the category choice buttons this also prompts the UI, hosts facial expression and hosts speech to change.

1. This will lead to the host asking his first question. The user can then enter their answer in the form and then submit with the button.
- When entering text into the form you can either submit with the enter key or by pressing the 'Submit' button.
- Both methods work as expected.
- The answer is then checked and appropriate changes to UI, hosts facial expression and hosts speech occur.

1. The host will then determine whether the user is correct or incorrect.
- If correct: The 'Next Question' button appears which serves the same purpose as the 'Start Quiz' button. Relevant changes to the UI, hosts facial expression and hosts speech occur.
- If incorrect: The popup appears and other cosmetic changes occur as expected. The popup correctly displayed the information and offers the user the option to play again.
- Clicking the play again button reloads the page and starts the process again.


### Testing User Stories

- First Time Visitor
    - When I visit this site I want to understand how I can interact with the website.
        1. Upon entering the site you see the header and title which should hint towards the content of the site.
        1. At this point the user would notice the quiz host who welcomes the user and suggests they choose a category to begin their test.
    - I would want to attempt the test/quiz in a category of my choice.
        1. After a category is chosen the quiz begins and the user can attempt to get as large a score as possible.
        1. Once the quiz reaches its conclusion the user is prompted to have another go or get in touch.
- Returning Visitor
    - As a returning visitor I may simply be looking to improve my score or try a new category.
        1. This is as easy upon returning as it was the first time.
    - I may also want to share my interest in the site via social media.
        1. A repeat user may be more inclined to share their interest which they get the option to do at the end of the quiz.
- Frequent User
    - As a frequent user I would be consistently be looking to improve my score in the quiz.
        1. If I took the project further I would include a leaderboard, however at this moment the user would have to remember their own score.
    - I may also be interested in the developent of the game.
        1. The user can find a link to the github repository in the header.

## Responsive Website View

### Desktop

In desktop mode:
1. The UI is clear and concise.
    - User can clearly see all the elements of the page.
    - The padding of the speech bubble changes for smaller monitors.
1. Quiz functions as intended.
    - Quiz Host facial expression changes.
    - Choosing a category does grab the intended data set.
    - User cannot submit an empty form.
    - Score is tracked properly.
    - User interaction with the buttons changes the UI.
    - Upon clicking the alien in the header the page is refreshed and quiz restarted.

### iPad/iPad Pro

In iPad/iPad Pro mode:
1. The UI is clear and concise.
    - User can clearly see all the elements of the page.
1. Quiz functions as intended.
    - Quiz Host facial expression changes.
    - Choosing a category does grab the intended data set.
    - User cannot submit an empty form.
    - Score is tracked properly.
    - User interaction with the buttons changes the UI.
    - Upon clicking the alien in the header the page is refreshed and quiz restarted.
1. Contrasting with the desktop view:
    - The background image is smaller to allow user to see the website in full.
    - Speech bubble padding is reduced to allow for large questions.

### Mobile 

In Mobile mode:
1. The UI is clear and concise.
    - User can clearly see all the elements of the page.
1. Quiz functions as intended.
    - Quiz Host facial expression changes.
    - Choosing a category does grab the intended data set.
    - User cannot submit an empty form.
    - Score is tracked properly.
    - User interaction with the buttons changes the UI.
    - Upon clicking the alien in the header the page is refreshed and quiz restarted.
1. Contrasting with the desktop view:
    - The background image is smaller and shifted to the left to allow user to see the website in full.
    - Speech bubble padding is further reduced to allow for large questions.
    - Buttons stack to they can fit onto the screen.
    - Form submission button also stacks.
## Different Browser Tests

### [Mozilla Firefox](https://www.mozilla.org/en-GB/firefox/new/)

All the testing and development has been conducted on Firefox. Bugfixes would have been conducted using the browser dev tools.

### [Google Chrome](https://www.google.co.uk/chrome/)

Quiz works as expected and UI appears as designed.

### [Safari](https://www.apple.com/uk/safari/)

Quiz works as expected and UI appears as designed.

### [Microsoft Edge](https://microsoftedgewelcome.microsoft.com/en-gb/)

Quiz works as expected and UI appears as designed.

## Bugs Fixed During Development

**Bug**: Sometimes after clicking either of the buttons that generate a question the speech bubble would be blank.

**Bugfix**: This was caused by falsy values contained in the category data fetched from jService API. It was fixed by implementing a function 'isQuestionInvalid' that checks if the question and/or answer are falsy. If found to be falsy the while loop will generate another random number and check again. This function also looks for repeat questions as these are also deemed invalid.

**Bug**: Questions are sometimes longer than expected so the speech bubble overlaps the submission form. This dirupts the UI as the user could not use the submit button.

**Bugfix**: The function 'isQuizDisrupted' was added to protect the UI. It compares the length of the question string with an integer. The integer is the maximum length a string can be before it would disrupt the UI. If found to be larger, the while loop generates another random number to find another random question. This maximum string length is different across different media platforms (Desktop, Ipad, Mobile).

**Bug**: Error in console due to lack of a favicon.

**Bugfix**: Implemented a favicon.

**Bug**: If the user was very fast they could cause errors in the console by choosing a category and quickly pressing the start quiz button.

**Bugfix**: This was because the implementation of 'async' 'await' in Javscript was incorrect. So the 'fetchCategory' function did not correctly wait for the data to be fetched before continuing with its final tasks. This was fixed by rewritting the code and implementing it correctly.