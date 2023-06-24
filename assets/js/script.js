/*
Source book ISBN 978-1-84078-955-3 Coding with HTML & JavaScript
This book provided a very basic format of this game 
A printscreen of the original game is available in the README.md file
The code provided by the above mentioned book was written in a .html file that includes styles and scripts within
For this game css and js are separated into styles.css and script.js files
Improvised code will be prefixed 'Improvised' in a comment 
*/


//Start game function
function startGame() {
    var nickname = document.getElementById("nickname").value;
    var level = document.getElementById("level").value;
    console.log("Nickname: " + nickname);
    console.log("Level: " + level);

    var instructionsDiv = document.querySelector('.instructions');
    instructionsDiv.classList.add('hidden');

    var formDiv = document.querySelector('.form');
    formDiv.style.marginBottom = '0'; /* Remove the margin at the bottom */

    var containerDiv = document.querySelector('.container');
    containerDiv.insertBefore(formDiv, instructionsDiv); /* Move the form div to the top */
}


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


// Action when the balloon is clicked
let score = 0;
let count = 0;
let level = 'easy'; // Start with the easy level

// Display the initial score and level
scoreBox.innerHTML = 'LEVEL: ' + level + ' - SCORE: ' + score;

// Function to handle the click event on the balloons
function poppedBalloon() {
    if (level === 'easy') {
        if (this === redBalloon) {
            score--; // Decrement the score if red balloon is clicked
        } else {
            score++; // Increment the score for other balloons
        }
    } else if (level === 'medium') {
        if (this === redBalloon) {
            score--; // Decrement the score if red balloon is clicked
        } else {
            score++; // Increment the score for blue and yellow balloons
        }
    } else if (level === 'hard') {
        if (this === redBalloon) {
            score--; // Decrement the score if red balloon is clicked
        } else {
            score++; // Increment the score for blue, green, and yellow balloons
        }
    }

    scoreBox.innerHTML = 'SCORE: ' + score; // Update the score display
    this.style.height = '1px'; // Shrink the balloon on click

    // Check the current level and proceed accordingly
    if (level === 'easy' && count >= 10) {
        if (score > 1) {
            level = 'medium';
            alert('Congratulations! You have advanced to the Medium level.');
            blueBalloon.style.display = 'none'; // Hide the blue balloon in medium level
        } else {
            gameOver();
        }
    } else if (level === 'medium' && count >= 10) {
        if (score > 1) {
            level = 'hard';
            alert('Congratulations! You have advanced to the Hard level.');
            yellowBalloon.style.display = 'none'; // Hide the yellow balloon in hard level
        } else {
            gameOver();
        }
    } else if (level === 'hard' && count >= 10) {
        if (score > 1) {
            alert('Congratulations! You have won the game!');
        } else {
            gameOver();
        }
    }
}

// Function to handle game over
function gameOver() {
    alert('Game Over!');
    clearInterval(timer); // Stop the balloon movement
}

// Function to move the balloons on the screen
function moveBalloon() {
    // Reset the balloon sizes and positions
    redBalloon.style.height = '160px';
    blueBalloon.style.height = '160px';
    yellowBalloon.style.height = '160px';
    greenBalloon.style.height = '160px';

    redBalloon.style.left = Math.random() * 800 + 'px';
    blueBalloon.style.left = Math.random() * 800 + 'px';
    yellowBalloon.style.left = Math.random() * 800 + 'px';
    greenBalloon.style.left = Math.random() * 800 + 'px';

    redBalloon.style.top = Math.random() * 600 + 'px';
    blueBalloon.style.top = Math.random() * 600 + 'px';
    yellowBalloon.style.top = Math.random() * 600 + 'px';
    greenBalloon.style.top = Math.random() * 600 + 'px';

    count++; // Increment the count of balloon movements

    // Check if the count reaches the maximum limit (10)
    if (count === 10) {
        gameOver();
    }
}

// Set an interval to move the balloons every 1000 milliseconds (1 second)
let timer = setInterval(moveBalloon, 1000);