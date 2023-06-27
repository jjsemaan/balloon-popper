

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
const redHeartBalloon = document.getElementById('red-heart-balloon');
const pinkBalloon = document.getElementById('pink-balloon');
const scoreBox = document.getElementById('score-box');

// Click events of the balloons
redBalloon.addEventListener('click', poppedBalloon);
blueBalloon.addEventListener('click', poppedBalloon);
yellowBalloon.addEventListener('click', poppedBalloon);
greenBalloon.addEventListener('click', poppedBalloon);
redHeartBalloon.addEventListener('click', poppedBalloon);
pinkBalloon.addEventListener('click', poppedBalloon);



function poppedBalloon() {
    // Check if `this` is equal to `redBalloon`
    if (this === redBalloon) {
        score--; // Decrement score by 1
    } else if (this === redHeartBalloon) {
        score += 2; // Increment score by 2 if `this` is equal to `redHeartBalloon`
    } else {
        score++; // Increment score by 1 for other balloons
    }

    // Update the score label with the new score
    scoreLabel.innerHTML = 'Score: ' + score;

    // Set the height of all balloons to 1px
    blueBalloon.style.height = '1px';
    greenBalloon.style.height = '1px';
    yellowBalloon.style.height = '1px';
    redBalloon.style.height = '1px';
    redHeartBalloon.style.height = '1px';
    pinkBalloon.style.height = '1px';
}

function moveBalloon() {
    // Show the balloons
    redBalloon.style.visibility = 'visible';
    blueBalloon.style.visibility = 'visible';
    yellowBalloon.style.visibility = 'visible';
    greenBalloon.style.visibility = 'visible';
    redHeartBalloon.style.visibility = 'visible';
    pinkBalloon.style.visibility = 'visible';


    // Get the screen width
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Calculate the balloon size based on the screen width
    var balloonSize = Math.min(screenWidth * 0.3, 200); // Set the maximum size to 200px or 30% of the screen width, whichever is smaller

    // Reset the balloon sizes and positions
    redBalloon.style.height = balloonSize + 'px';
    blueBalloon.style.height = balloonSize + 'px';
    yellowBalloon.style.height = balloonSize + 'px';
    greenBalloon.style.height = balloonSize + 'px';
    redHeartBalloon.style.height = balloonSize * 1.5 + 'px';
    pinkBalloon.style.height = balloonSize + 'px';

    // Set the maximum left position based on the screen width
    var maxLeft = screenWidth - 200; // Subtract the balloon width (200px) to prevent it from going outside the screen

    // Loop through five iterations
    for (let i = 0; i < 6; i++) {
        // Get the balloon element based on the current iteration index
        // The balloon elements are stored in an array: [redBalloon, blueBalloon, yellowBalloon, greenBalloon, redHeartBalloon, pinkBalloon]
        const balloon = [redBalloon, blueBalloon, yellowBalloon, greenBalloon, redHeartBalloon, pinkBalloon][i];

        // Set the left position of the balloon element to a random value within the maximum left boundary
        balloon.style.left = Math.random() * maxLeft + 'px';

        // Set the top position of the balloon element to a random value within 0 to 600 pixels from the top
        balloon.style.top = Math.random() * 600 + 'px';
    }


    count++; // Increment the count of balloon movements

    if (count == 20) {
        clearInterval(timer);
        alert('Game Over!');
        redBalloon.style.visibility = 'hidden';
        blueBalloon.style.visibility = 'hidden';
        yellowBalloon.style.visibility = 'hidden';
        greenBalloon.style.visibility = 'hidden';
        redHeartBalloon.style.visibility = 'hidden';
        pinkBalloon.style.visibility = 'hidden';

        return; // Terminate the code execution after displaying the alert
    }
}
let timer = setInterval(moveBalloon, 800);