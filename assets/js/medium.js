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
    
    // Get the screen width
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Calculate the balloon size based on the screen width
    //var maxBalloonSize = Math.min(screenWidth * 0.3, 200); // Set the maximum size to 200px or 30% of the screen width, whichever is smaller
    //var balloonSize = Math.min(maxBalloonSize, 150); // Limit the maximum balloon size to 150px

    // Reset the balloon sizes and positions
    if (window.innerWidth <= 768) {
        // Smaller screen sizes
        redBalloon.style.height = 150 + 'px';
        blueBalloon.style.height = 150 + 'px';
        yellowBalloon.style.height = 150 + 'px';
        greenBalloon.style.height = 150 + 'px';
        redHeartBalloon.style.height = 150 * 1.5 + 'px';
        pinkBalloon.style.height = 150 + 'px';
    } else {
        // Larger screen sizes
        redBalloon.style.height = 250 + 'px';
        blueBalloon.style.height = 250 + 'px';
        yellowBalloon.style.height = 200 + 'px';
        greenBalloon.style.height = 250 + 'px';
        redHeartBalloon.style.height = 250 * 1.5 + 'px';
        pinkBalloon.style.height = 250 + 'px';
    }


    // Show the balloons
    redBalloon.style.visibility = 'visible';
    blueBalloon.style.visibility = 'visible';
    yellowBalloon.style.visibility = 'visible';
    greenBalloon.style.visibility = 'visible';
    redHeartBalloon.style.visibility = 'visible';
    pinkBalloon.style.visibility = 'visible';

    // Set the maximum left position based on the screen width
    //var maxLeft = screenWidth - 200; // Subtract the balloon width (200px) to prevent it from going outside the screen

    // Function to generate random coordinates
    function generateRandomCoordinates(count) {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        var coordinates = [];

        for (var i = 0; i < count; i++) {
            var balloonWidth = 120; // Width of the balloons
            var balloonHeight = 150; // Height of the balloons

            var randomX = Math.floor(Math.random() * (screenWidth - balloonWidth));
            var randomY = Math.floor(Math.random() * (screenHeight - balloonHeight));
            coordinates.push([randomX, randomY]);
        }

        return coordinates;
    }

    // Generate random coordinates for 6 balloons
    var balloonCoordinates = generateRandomCoordinates(6);

    // Apply the random coordinates to the balloons
    for (var i = 0; i < 6; i++) {
        var balloon = [redBalloon, blueBalloon, yellowBalloon, greenBalloon, redHeartBalloon, pinkBalloon][i];
        var coordinates = balloonCoordinates[i];

        balloon.style.left = coordinates[0] + 'px';
        balloon.style.top = coordinates[1] + 'px';
    }



    count++; // Increment the count of balloon movements

    if (count == 22) {
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