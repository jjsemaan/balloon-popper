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
        ['easy', 'easy.html'], //Map easy level to easy.html
        ['medium', 'medium.html'], //Map medium level to medium.html
        ['hard', 'hard.html'] //Map hard level to hard.html
    ]);

    // Retrieve the HTML file based on the selected difficulty level
    var htmlFile = levelToHtml.get(level);

    // Redirect the page to the corresponding HTML file
    window.location.href = htmlFile;
});

// Action when the balloon is clicked
let score = 0;
let count = 0;

// Retrieve score-label element
let scoreLabel = document.getElementById('score-label');

//display the initial score as 0
scoreLabel.textContent = 'Score: ' + score;

// Select the balloon elements and the score box element from the DOM
const redBalloon = document.getElementById('red-balloon');
const blueBalloon = document.getElementById('blue-balloon');
const yellowBalloon = document.getElementById('yellow-balloon');
const greenBalloon = document.getElementById('green-balloon');
const scoreBox = document.getElementById('score-box');

// Click events of the balloons
redBalloon.addEventListener('click', poppedBalloon);
blueBalloon.addEventListener('click', poppedBalloon);
yellowBalloon.addEventListener('click', poppedBalloon);
greenBalloon.addEventListener('click', poppedBalloon);

function poppedBalloon() {
    score++;
    scoreLabel.innerHTML = 'Score: ' + score;
    blueBalloon.style.height = '1px';
    greenBalloon.style.height = '1px';
    yellowBalloon.style.height = '1px';
    redBalloon.style.height = '1px';
}

function moveBalloon() {
    // Reset the balloon sizes and positions
    redBalloon.style.height = '200px';
    blueBalloon.style.height = '200px';
    yellowBalloon.style.height = '200px';
    greenBalloon.style.height = '200px';

    redBalloon.style.left = Math.random() * 800 + 'px';
    blueBalloon.style.left = Math.random() * 800 + 'px';
    yellowBalloon.style.left = Math.random() * 800 + 'px';
    greenBalloon.style.left = Math.random() * 800 + 'px';

    redBalloon.style.top = Math.random() * 600 + 'px';
    blueBalloon.style.top = Math.random() * 600 + 'px';
    yellowBalloon.style.top = Math.random() * 600 + 'px';
    greenBalloon.style.top = Math.random() * 600 + 'px';

    count++; // Increment the count of balloon movements
    if (count == 10) {
        alert('Game Over!');
        clearInterval(timer);
    }
}

let timer = setInterval(moveBalloon, 1000);

// Select the start game button element from the DOM
const startButton = document.getElementById('start-button');
// Add click event to the start game button
startButton.addEventListener('click', startGame);
