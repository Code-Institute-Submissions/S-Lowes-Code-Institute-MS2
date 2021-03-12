## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate pages of this project. This ensures there were no syntax errors. I also used formatters for my HTML, CSS & JS.

#### Validators
-   [W3C Markup Validator](https://validator.w3.org/) - [Results](documentation/images/html_valid.png)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - [Results](documentation/images/css_valid.png)

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

### Further Testing

- So far testing has been on safari, firefox, and chrome.
- The website was viewed on a variety of devices such as a Laptop, iPhone, and Ipad.
- Friends and family members were asked to explore the site and documentation to point out any bugs or issues they spot.

### Known Bugs

Users have occurred a bug where the question does not appear in the speech bubble after selecting a category or after answering a question.
- This seems to have only happened on mobile so far.
- The same users have been unable to repeat the bug.

I currently think it could be an empty element in the category data. However, since the bug has not happened on desktop I have not had a chance to use developer tools to investigate it.