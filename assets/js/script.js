// Execute the following code when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the nickname from localStorage
    var nickname = localStorage.getItem('nickname');
    if (nickname) {
        // Display the nickname on the page
        var nicknameElement = document.getElementById('nickname-display');
        nicknameElement.textContent = 'Player Nickname: ' + nickname + '!';
    }
});

// Add event listener to the form submission
document.getElementById('game-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve the nickname from the input field
    var nickname = document.getElementById('nickname').value;
    // Store the nickname in localStorage
    localStorage.setItem('nickname', nickname);

    // Retrieve the selected difficulty level from the dropdown menu
    var level = document.getElementById('level').value;

    // Data Structure to map difficulty level
    var levelToHtml = new Map([
        ['easy', 'easy.html'],      //Map easy level to easy.html
        ['medium', 'medium.html'],  //Map medium level to medium.html
        ['hard', 'hard.html']       //Map hard level to hard.html
    ]);

    // Retrieve the HTML file based on the selected difficulty level
    var htmlFile = levelToHtml.get(level);

    // Redirect the page to the corresponding HTML file
    window.location.href = htmlFile;
});

// Select the start game button element from the DOM
const startButton = document.getElementById('start-button');

// Add click event to the start game button
startButton.addEventListener('click', startGame);

// Select the balloon elements and the score box element from the DOM
const redBalloon = document.getElementById('red-balloon');
const blueBalloon = document.getElementById('blue-balloon');
const yellowBalloon = document.getElementById('yellow-balloon');
const greenBalloon = document.getElementById('green-balloon');
const scoreBox = document.getElementById('score-box');



