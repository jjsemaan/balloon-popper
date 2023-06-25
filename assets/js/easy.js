

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
    if (this === redBalloon) {
        score--;
    } else {
        score++;
    }
    scoreLabel.innerHTML = 'Score: ' + score;
    blueBalloon.style.height = '1px';
    greenBalloon.style.height = '1px';
    yellowBalloon.style.height = '1px';
    redBalloon.style.height = '1px';
}


function moveBalloon() {
    // Show the balloons
    redBalloon.style.visibility = 'visible';
    blueBalloon.style.visibility = 'visible';
    yellowBalloon.style.visibility = 'visible';
    greenBalloon.style.visibility = 'visible';

    // Reset the balloon sizes and positions
    redBalloon.style.height = '30%';
    blueBalloon.style.height = '30%';
    yellowBalloon.style.height = '30%';
    greenBalloon.style.height = '30%';

    // Get the screen width
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Set the maximum left position based on the screen width
    var maxLeft = screenWidth - 200; // Subtract the balloon width (200px) to prevent it from going outside the screen

    for (let i = 0; i < 4; i++) {
        const balloon = [redBalloon, blueBalloon, yellowBalloon, greenBalloon][i];
        balloon.style.left = Math.random() * maxLeft + 'px';
        balloon.style.top = Math.random() * 500 + 'px';
    }

    count++; // Increment the count of balloon movements

    if (count == 15) {
        clearInterval(timer);
        alert('Game Over!');
        redBalloon.style.visibility = 'hidden';
        blueBalloon.style.visibility = 'hidden';
        yellowBalloon.style.visibility = 'hidden';
        greenBalloon.style.visibility = 'hidden';

        return; // Terminate the code execution after displaying the alert
    }
}
let timer = setInterval(moveBalloon, 1200);



// Select the start game button element from the DOM
//const startButton = document.getElementById('start-button');
// Add click event to the start game button
//startButton.addEventListener('click', startGame);
