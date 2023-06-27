

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

    // Get the screen width
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Calculate the balloon size based on the screen width
    var balloonSize = Math.min(screenWidth * 0.3, 200); // Set the maximum size to 200px or 30% of the screen width, whichever is smaller

    // Reset the balloon sizes and positions
    redBalloon.style.height = balloonSize + 'px';
    blueBalloon.style.height = balloonSize + 'px';
    yellowBalloon.style.height = balloonSize + 'px';
    greenBalloon.style.height = balloonSize + 'px';

    // Set the maximum left position based on the screen width
    var maxLeft = screenWidth - 200; // Subtract the balloon width (200px) to prevent it from going outside the screen

    // Loop through four iterations
    for (let i = 0; i < 4; i++) {
        // Get the balloon element based on the current iteration index
        // The balloon elements are stored in an array: [redBalloon, blueBalloon, yellowBalloon, greenBalloon]
        const balloon = [redBalloon, blueBalloon, yellowBalloon, greenBalloon][i];

        // Set the left position of the balloon element to a random value within the maximum left boundary
        balloon.style.left = Math.random() * maxLeft + 'px';

        // Set the top position of the balloon element to a random value within 0 to 600 pixels from the top
        balloon.style.top = Math.random() * 600 + 'px';
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